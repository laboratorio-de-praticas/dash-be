import { AppDataSource } from "./src/config/data-source.js";
import express from "express";
import dotenv from "dotenv";
import Votante from "./src/models/Votante.js";
import DashboardInternaRoutes from "./src/routes/DashBoardInternaRoutes.js";
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

// Importando Rotas
app.use("/", DashboardInternaRoutes);

// Iniciando Serviço na porta definida
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Servidor rodando na porta ${PORT}`);

    // Estabelecer Conexão com o banco de dados    
    AppDataSource.initialize()
      .then(async () => console.log("Banco de dados conectado!"))
      .catch((error) => console.log(error));
  }
});
