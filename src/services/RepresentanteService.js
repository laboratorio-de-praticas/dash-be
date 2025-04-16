import { AppDataSource } from "../config/data-source.js";
const repository = AppDataSource.getRepository("Representante");

class RepresentanteService {
  
  async findAll() {
    console.log(`Buscando Todos os Representantes...`);
    try {
      const representantes = await repository.find();
      console.log(`Fim da Busca de Representantes...`);
      return representantes;
    } catch (error) {
      console.log(`Erro ao buscar Representantes: ${error}`);
      throw error;
    }
  }

  //Função de referência - Podem existir erros de sintaxe e lógica - Refatorar assim que necessário
  async getAllRepresentantesByAlunoSemestre(cursoSemestre){
    console.log(`Buscando os representantes da turma [${cursoSemestre}]...`);
    try {
      const representantes = await repository.query(`SELECT * FROM representantes c INNER JOIN alunos a ON c.id_aluno = a.id WHERE a.curso_semestre = $1`, [cursoSemestre]);
      console.log(`Fim da Busca de Representantes...`);
      return representantes;
    } catch (error) {
      console.log(`Erro ao buscar Representantes: ${error}`);
      throw error;
    }
  }
}

export default new RepresentanteService();
