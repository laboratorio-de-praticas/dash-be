import DashboardInternasService from '../services/DashboardInternaService.js';
import BadRequestError from '../errors/BadRequestError.js';
import CursosSemestre from '../models/enums/CursoSemestre.js';
class DashBoardInternaController {
  // Serve a rota /v1/dashboard/interno
  async findDashboardInternoGeral(req, res, next) {
    try {
      const response =
        await DashboardInternasService.findEventosInternoGeralAtivo();

      return res.status(200).json(response);
    } catch (error) {
      console.error('Erro ao executar consulta dos Eventos Internos Geral!');
      next(error); // Passa o erro para o middleware de tratamento de erros
    }
  }

  // Serve a rota /v1/dashboard/interno/curso/:curso_semestre
  async findDashboardInternoByCurso(req, res, next) {
    const curso = req.params.curso_semestre.toUpperCase(); // Obtém o parâmetro de curso da URL
    try {
      // Valida o parâmetro de curso
      if (
        !curso ||
        curso.trim() === '' ||
        !Object.values(CursosSemestre).includes(curso)
      ) {
        throw new BadRequestError(
          'Curso informado inválido. Por favor inserir um curso válido como parâmetro.',
        );
      }

      // Chama o serviço para buscar os dados do dashboard interno ativo por curso
      const response =
        await DashboardInternasService.findEventoInternoByCurso(curso);


      return res.status(200).json(response);
    } catch (error) {
      console.error(`Erro ao executar consulta de evento Interno do curso `);
      next(error);
    }
  }
}

export default new DashBoardInternaController();
