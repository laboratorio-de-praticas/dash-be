import { AppDataSource } from "../config/data-source.js";
const repository = AppDataSource.getRepository("Aluno");

class AlunoService {
  async findAll() {
    console.log(`Buscando Todos os Alunos...`);
    try {
      const alunos = await repository.find();
      console.log(`Fim da Busca de Alunos...`);
      return alunos;
    } catch (error) {
      console.log(`Erro ao buscar Alunos: ${error}`);
      throw error;
    }
  }
}

export default new AlunoService();
