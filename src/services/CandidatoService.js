import { AppDataSource } from "../config/data-source.js";
const repository = AppDataSource.getRepository("Candidato");

class CandidatoService {
  
  async findAll() {
    console.log(`Buscando Todos os Candidatos...`);
    try {
      const candidatos = await repository.find();
      console.log(`Fim da Busca de Candidatos...`);
      return candidatos;
    } catch (error) {
      console.log(`Erro ao buscar Candidatos: ${error}`);
      throw error;
    }
  }

  //Função de referência - Podem existir erros de sintaxe e lógica - Refatorar assim que necessário
  async getAllCandidatosByAlunoSemestre(cursoSemestre){
    console.log(`Buscando os candidatos da turma [${cursoSemestre}]...`);
    try {
      const candidatos = await repository.query(`SELECT * FROM candidatos c INNER JOIN alunos a ON c.id_aluno = a.id WHERE a.curso_semestre = $1`, [cursoSemestre]);
      console.log(`Fim da Busca de Candidatos...`);
      return candidatos;
    } catch (error) {
      console.log(`Erro ao buscar Candidatos: ${error}`);
      throw error;
    }
  }
}

export default new CandidatoService();
