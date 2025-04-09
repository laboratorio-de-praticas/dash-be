import EventoService from "../services/EventoService.js";

class DashBoardInternaController {
  //Endpoint Temporário Para Debug e Exemplos
  //Buscar todos os eventos
  async findAllEventos(req, res) {
    try {
      const eventos = await EventoService.findAll();
      res.status(200).json( eventos );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Controllers para os webhooks, segue o exemplo do time de integração 
  async representantesWebHook(req, res) {
    console.log('Novo voto recebido para representantes:', req.body);
    res.status(200).json({ message: 'Voto recebido com sucesso!' });
  }
}


export default new DashBoardInternaController();