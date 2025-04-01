import { AppDataSource } from "./src/data-source.js";
import express from "express";
import dotenv from "dotenv";
import Votante from "./src/models/Votante.js";
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
AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Servidor rodando na porta ${PORT}`);
      }
    });

    // Teste de inserção no banco de dados
    console.log("Inserting a new voter into the database...");
    const voter = {
      nome: "aaaa",
      situacao_votante: "Apto a Votar",
    };
    // const voter = new Votante();
    // voter.nome = "aaaa";
    // voter.id_aluno = "5uydthju7"
    // voter.id_visitante = "s568urf"
    // voter.id_evento = "194758284869"
    // voter.situacao_votante = "Apto a Votar";

    await votanteRepository.save(voter);
    console.log("Saved a new voter with id: " + voter.id);

    console.log("Loading voters from the database...");
    
    console.log("Loaded voters: ", voter);

    // console.log("Here you can setup and run express / fastify / any other framework.")
  })
  .catch((error) => console.log(error));
