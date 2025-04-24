import EventosService from '../services/EventosService.js';
import EventoTipos from '../models/enums/EventoTipos.js';
import EventoStatus from '../models/enums/EventoStatus.js';
import BadRequestError from '../errors/BadRequestError.js';

class EventoController {
  async findAll(req, res, next) {
    try {
      const response = await EventosService.findAll();

      res.status(200).json(response);
    } catch (error) {
      console.log(`Erro ao buscar Eventos`);
      next(error);
    }
  }

  async findAllByStatus(req, res, next) {
    try {
      const eventoStatusParam = req.params.statusEvento;

      if (
        !eventoStatusParam ||
        eventoStatusParam.trim() === '' ||
        !Object.values(EventoStatus).includes(eventoStatusParam)
      ) {
        throw new BadRequestError(
          'Requisição mal formada! Informe um Status de evento válido (Ativo, Em_Preparo, Em_Contagem, Finalizado)',
        );
      }

      const response = await EventosService.findAllByStatus(eventoStatusParam);

      res.status(200).json(response);
    } catch (error) {
      console.log(`Erro ao buscar Eventos pelo status`);
      next(error);
    }
  }
  async findAllByTipo(req, res, next) {
    try {
      const eventoTipoParam = req.params.tipoEvento;

      if (
        !eventoTipoParam ||
        eventoTipoParam.trim() === '' ||
        !Object.values(EventoTipos).includes(eventoTipoParam)
      ) {
        throw new BadRequestError(
          'Requisição mal formada! Informe um Tipo de evento válido (Externo, Interno)',
        );
      }

      const response = await EventosService.findAllByTipo(eventoTipoParam);

      res.status(200).json(response);
    } catch (error) {
      console.log(`Erro ao buscar Eventos pelo tipo`);
      next(error);
    }
  }

  async findAllByStatusAndTipo(req, res, next) {
    try {
      const eventoStatusParam = req.params.statusEvento;
      const eventoTipoParam = req.params.tipoEvento;

      if (
        !eventoStatusParam ||
        eventoStatusParam.trim() === '' ||
        !Object.values(EventoStatus).includes(eventoStatusParam) ||
        !eventoTipoParam ||
        eventoTipoParam.trim() === '' ||
        !Object.values(EventoTipos).includes(eventoTipoParam)
      ) {
        throw new BadRequestError(
          'Requisição mal formada! Informe um Status de evento válido (Ativo, Em_Preparo, Em_Contagem, Finalizado) e um tipo válido (Externo, Interno)',
        );
      }

      const response = await EventosService.findAllByStatusAndTipo(
        eventoStatusParam,
        eventoTipoParam,
      );

      res.status(200).json(response);
    } catch (error) {
      console.log(`Erro ao buscar Eventos pelo status e tipo`);
      next(error);
    }
  }
}
export default new EventoController();
