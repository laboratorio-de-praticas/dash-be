import { AppDataSource } from "./data-source"
import { Votante } from "./models/Votante"
import express from "express";
import dotenv from "dotenv";

/* Variáveis de Ambiente */
dotenv.config();

//Configuração Express
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT;
AppDataSource.initialize().then(async () => {

    app.listen(PORT, (error) => {
        if (error) {
            console.log(error);
        } else {
          console.log(`Servidor rodando na porta ${PORT}`);
        }
    });

    // Teste de inserção no banco de dados
    // console.log("Inserting a new voter into the database...")
    // const voter = new Votante()
    // voter.id = "c14c7a54-e3e9-4a5c-8dd1-5a16d556dd79"
    // voter.id_aluno = "5uydthju7"
    // voter.id_visitante = "s568urf"
    // voter.id_evento = "194758284869"
    // voter.situacao_votante = "Apto a Votar"
    // await AppDataSource.manager.save(voter)
    // console.log("Saved a new voter with id: " + voter.id)

    // console.log("Loading voters from the database...")
    // const voters = await AppDataSource.manager.find(Votante)
    // console.log("Loaded voters: ", voters)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
