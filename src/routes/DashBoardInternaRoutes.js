import DashBoardInternaController from "../controllers/DashBoardInternaController.js";
import express from "express";
const router = express.Router();

//Rota Temporário - Exemplo I
router.get("/eventos", DashBoardInternaController.findAllEventos);
export default router;



