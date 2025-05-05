import {Router} from 'express';
import VotosExternosController from '../controllers/VotosExternosController.js';

const router = Router();

router.get(
  '/v1/votos/externo/logs/idevento/:id_evento',
  VotosExternosController.findLogVotosExternosByEventoId,
);

export default router;
