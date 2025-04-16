import EventoController from '../controllers/EventoController.js';
import express from 'express';
const router = express.Router();

// Rota para buscar todos os eventos
router.get('/eventos', EventoController.findAll);
// Rota para buscar todos os eventos pelo Tipo de Evento e pelo status
router.get(
  '/eventos/:tipoEvento/:statusEvento?',
  EventoController.findAllByTipoEventoAndStatus,
);

export default router;
