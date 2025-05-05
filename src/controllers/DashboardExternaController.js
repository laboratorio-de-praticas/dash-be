import DashboardExternaService from '../services/DashboardExternaService.js';
class DashBoardExternaController {
  async findDashboardExternaAtivoGeral(req, res, next) {
    try {
      const response =
        await DashboardExternaService.findEventosExternosGeralAtivo();
      return res.status(200).json(response);
    } catch (error) {
      console.error('Erro ao executar consulta dos Eventos Externos Geral!');
      next(error); // Passa o erro para o middleware de tratamento de erros
    }
  }
}

export default new DashBoardExternaController();
