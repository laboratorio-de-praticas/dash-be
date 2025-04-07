import DashboardInternasService from "../services/DashboardInternaService.js";
class DashBoardInternaController {
  // Serve a rota /v1/dashboard/interna
  async findDashboardInternoGeral(req, res) {
    try {
      const dashboardInternoGeralDados =
        await DashboardInternasService.findEventosInternoGeral();

      return res.status(200).json(dashboardInternoGeralDados);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Serve a rota /v1/dashboard/interna/:curso
  async findDashboardInternoByCurso(req, res) {
    try {
      const curso = req.params.curso; // Obtém o parâmetro de curso da URL

      // Valida o parâmetro de curso
      if (!curso || curso.trim() === "") {
        return res.status(400).json({ message: "Curso não fornecido corretamente!" });
      }

      // Chama o serviço para buscar os dados do dashboard interno ativo por curso
      const dashboardInternoGeralDados =
        await DashboardInternasService.findEventoInternoByCurso(curso);

      return res.status(200).json(dashboardInternoGeralDados);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default new DashBoardInternaController();
