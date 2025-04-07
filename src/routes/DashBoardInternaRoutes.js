import DashBoardInternaController from "../controllers/DashboardInternaController.js";
import express from "express";
const router = express.Router();

// Rota para buscar todos os dados para dashbord de eventos Internos Ativos - Inclui candidatos e votos
router.get("/v1/dashboard/interno", DashBoardInternaController.findDashboardInternoGeral);
router.get("/v1/dashboard/interno/:curso", DashBoardInternaController.findDashboardInternoByCurso);

export default router;




