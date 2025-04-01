import EventoService from "../services/EventoService.js";

class DashBoardInternaController {
  //Endpoint Temporário Para Debug e Exemplos
  //Buscar todos os eventos
  async findAllEventos(req, res) {
    try {
      const eventos = await EventoService.findAll;
      res.status(200).json({ eventos });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}


export default new DashBoardInternaController();