import EventoService from "../services/EventoService.js";
import DashboardInternasService from "../services/DashboardInternaService.js";
import EventoTipos from "../models/enums/EventoTipos.js";
import EventoStatus from "../models/enums/EventoStatus.js";

class EventoController {
  async findAll(req, res) {
    try {
      const eventos = await EventoService.findAll();
      return res.status(200).json(eventos);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async findAllByTipoEventoAndStatus(req, res) {
    try {
      const { tipoEvento, statusEvento } = req.params;
      console.log(statusEvento);
      // Verifica se o parâmetro de tipoEvento é válido
      if (!Object.values(EventoTipos).includes(tipoEvento)) {
        return res
          .status(400)
          .json({ message: "Tipo de evento fornecido é inválido." });
      }
      // Verifica se o parâmetro de statusEvento é válido caso esteja presente
      if (
        (statusEvento !== undefined) &&
        !Object.values(EventoStatus).includes(statusEvento)
      ) {
        return res
          .status(400)
          .json({ message: "Status de evento fornecido é inválido." });
      }

      if (statusEvento) {
        //Se status de evento
        const eventos = await EventoService.findAllByTipoEventoAndStatus(
          tipoEvento,
          statusEvento
        );
        return res.status(200).json(eventos);
      } else {
        //Sem filtrar status do evento
        const eventos = await EventoService.findAllByTipoEvento(tipoEvento);
        return res.status(200).json(eventos);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
export default new EventoController();
