import ListenerController from "../controllers/ListenerController.js"
import { Router } from "express"
const routerListener = Router()

// rotas para recebimento dos votos pelo webhook
routerListener.post("/votacao_projetos", ListenerController.projetosWebHook);
routerListener.post("/votacao_representantes", ListenerController.representantesWebHook);

export default routerListener;