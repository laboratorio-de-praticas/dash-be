import DashBoardInternaController from "../controllers/DashboardInternaController.js";
import express from "express";
const routerInterna = express.Router();

//Rota Temporário - Exemplo I
routerInterna.get("/eventos", DashBoardInternaController.findAllEventos);

// Rota para recebendo de dados do webhooks para representantes
routerInterna.post("/votacao_representantes", DashBoardInternaController.representantesWebHook);
export default routerInterna;



