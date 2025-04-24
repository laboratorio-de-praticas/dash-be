import {Router} from 'express';
import VotosInternosController from '../controllers/VotosInternosController.js';

const router = Router();

router.get(
  '/v1/votos/interno/logs/idevento/:id_evento',
  VotosInternosController.findLogVotosInternosByEventoId,
);

export default router;
