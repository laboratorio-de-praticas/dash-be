import DashBoardInternaController from "../controllers/DashboardInternaController.js";
import express from "express";
const router = express.Router();

//Rota Temporário - Exemplo I
router.get("/v1/dashboard/interna", DashBoardInternaController.findDashboardInternoGeral);
export default router;



