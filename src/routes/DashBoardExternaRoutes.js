import DashboardExternaController from '../controllers/DashboardExternaController.js';
import express from 'express';
const routerExterna = express.Router();
routerExterna.get(
  '/v1/dashboard/externo/ativo',
  DashboardExternaController.findDashboardExternaAtivoGeral,
);

export default routerExterna;
