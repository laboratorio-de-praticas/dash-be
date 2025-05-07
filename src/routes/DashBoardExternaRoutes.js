import DashboardExternaController from '../controllers/DashboardExternaController.js';
/* import authenticateToken from '../middlewares/authTemplate.js'; */
import express from 'express';
const routerExterna = express.Router();

// exeplo do middleware de autenticação aplicado em rotas especificas

routerExterna.get(
  '/v1/dashboard/externo/ativo',
  /* authenticateToken, */
  DashboardExternaController.findDashboardExternaAtivoGeral,
);

export default routerExterna;
