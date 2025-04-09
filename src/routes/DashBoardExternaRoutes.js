import DashBoardExternaController from "../controllers/DashboardExternaController.js";
import express from "express";
const routerExterna = express.Router();

// rota para recebendo de dados do webhooks para projetos
routerExterna.post("/votacao_projetos", DashBoardExternaController.projetosWebHook);
export default routerExterna;