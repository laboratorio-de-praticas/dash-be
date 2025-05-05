import BadRequestError from '../errors/BadRequestError.js';
import VotosExternosService from '../services/VotosExternosService.js';
class VotosExternosController {
  // /v1/votos/interno/logs/id_evento/:id_evento
  async findLogVotosExternosByEventoId(req, res, next) {
    try {
      const idEventoParam = req.params.id_evento;
      console.log(idEventoParam);
      const idEvento = parseInt(idEventoParam);

      //Validar route param id_evento
      if (
        !idEvento ||
        idEventoParam.trim() === '' ||
        !Number.isInteger(idEvento)
      ) {
        throw new BadRequestError(
          'Id de evento informado é inválido. Informe um valor válido!',
        );
      }

      const response =
        await VotosExternosService.findLogDeVotosByEventoId(idEvento);

      console.log(response);

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default new VotosExternosController();
