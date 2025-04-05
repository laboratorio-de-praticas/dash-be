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

  async findAllByTipoEvento(tipoEvento) {
    console.log(`Buscando Todos Eventos do Tipo: ${tipoEvento}`);
    try {
      const eventos = await repository.find({
        where: { tipo_evento: tipoEvento },
      });
      console.log(`Fim da Busca de   do Tipo: ${tipoEvento}`);
      return eventos;
    } catch (error) {
      console.log(`Erro ao buscar Eventos do Tipo: ${tipoEvento}: ${error}`);
      throw error;
    }
  }

  async findAllByTipoEventoAndStatus(tipoEvento, statusEvento) {
    console.log(`Buscando Todos Eventos do Tipo: ${tipoEvento}`);
    try {
      const eventos = await repository.find({
        where: { tipo_evento: tipoEvento, status_evento: statusEvento },
      });
      console.log(`Fim da Busca de   do Tipo: ${tipoEvento}`);
      return eventos;
    } catch (error) {
      console.log(`Erro ao buscar Eventos do Tipo: ${tipoEvento}: ${error}`);
      throw error;
    }
  }
}

export default new EventoService();
