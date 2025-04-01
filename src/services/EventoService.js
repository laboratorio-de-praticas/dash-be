import { AppDataSource } from "../config/data-source.js";
const repository = AppDataSource.getRepository("Evento");

class EventoService {
  async findAll() {
    console.log(`Buscando Todos os Eventos...`);
    try {
      const eventos = await repository.find();
      console.log(`Fim da Busca de Eventos...`);
      return eventos;
    } catch (error) {
      console.log(`Erro ao buscar Eventos: ${error}`);
      throw error;
    }
  }
}

export default new EventoService();
