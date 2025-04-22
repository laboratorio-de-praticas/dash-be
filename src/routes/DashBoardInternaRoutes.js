import DashBoardInternaController from '../controllers/DashboardInternaController.js';
import express from 'express';
const routerInterna = express.Router();

// Rota para buscar todos os dados para dashbord de eventos Internos Ativos - Inclui candidatos e votos
routerInterna.get(
  '/v1/dashboard/interno/ativo',
  DashBoardInternaController.findDashboardInternoGeral,
);
routerInterna.get(
  '/v1/dashboard/interno/ativo/curso/:curso_semestre',
  DashBoardInternaController.findDashboardInternoByCurso,
);

export default routerInterna;
