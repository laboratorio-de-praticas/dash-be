import EventosController from '../controllers/EventosController.js';
import express from 'express';
const router = express.Router();

// Rota para buscar todos os eventos
router.get('/eventos', EventosController.findAll);

//Buscar pelo status
router.get('/eventos/status/:statusEvento', EventosController.findAllByStatus);

//Buscar pelo tipo
router.get('/eventos/tipo/:tipoEvento', EventosController.findAllByTipo);

//Buscar pelo tipo
router.get(
  '/eventos/status/:statusEvento/tipo/:tipoEvento',
  EventosController.findAllByStatusAndTipo,
);
export default router;
