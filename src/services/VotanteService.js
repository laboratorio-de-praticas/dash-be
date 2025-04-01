import { AppDataSource } from "../config/data-source.js";
const repository = AppDataSource.getRepository("Votante");

class VotanteService {
  async findAll() {
    console.log(`Buscando Todos os votantes...`);
    try {
      const votantes = await repository.find();
      console.log(`Fim da Busca de Votantes...`);
      return votantes;
    } catch (error) {
      console.log(`Erro ao buscar votantes: ${error}`);
      throw error;
    }
  }
}

export default new VotanteService();
