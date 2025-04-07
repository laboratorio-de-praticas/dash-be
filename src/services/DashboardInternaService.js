import { AppDataSource } from "../config/data-source.js";
class DashBoardInterna {
  // Método para buscar dados para o dashboard  de eventos Interno Ativo de todos os cursos_semestres
  async findEventosInternoGeral() {
    const query = `
        SELECT 
          e.id_evento,
          e.nome_evento,
          e.descricao_evento,
          e.curso_semestre,
          e.tipo_evento,
          e.data_inicio,
          e.data_fim,
          SUM(COALESCE(v.qtd_votos, 0)) AS total_votos,
          json_agg(
            json_build_object(
              'id', c.id,
              'nome', u.nome,
              'curso_semestre', a.curso_semestre,
              'quantidade_de_votos', COALESCE(v.qtd_votos, 0)
            )
          ) AS candidatos
        FROM "Evento" e
        INNER JOIN "Candidato" c ON c.id_evento = e.id_evento
        INNER JOIN "Aluno" a ON a.id_aluno = c.id_aluno
        INNER JOIN "Usuario" u ON u.id = a.fk_id_usuario
        LEFT JOIN (
          SELECT 
            id_candidato, 
            COUNT(*) AS qtd_votos
          FROM "Voto"
          GROUP BY id_candidato
        ) v ON v.id_candidato = c.id
        WHERE e.tipo_evento = 'Interno'
        AND e.status_evento = 'Ativo'
        GROUP BY e.id_evento, e.nome_evento, e.descricao_evento, e.curso_semestre, e.data_inicio, e.data_fim;
      `;

    try {
      const result = await AppDataSource.query(query);

      console.log("Dados do Evento Interno Geral obtidos com sucesso!");
      return result;
    } catch (error) {
      console.log("Erro ao executar consulta dos Eventos Internos Geral:", error);
      throw error; // Repassa o erro para o controller lidar
    }
  }

  async findEventoInternoByCurso(curso) {
    const query = `
        SELECT 
          e.id_evento,
          e.nome_evento,
          e.descricao_evento,
          e.curso_semestre,
          e.tipo_evento,
          e.data_inicio,
          e.data_fim,
          SUM(COALESCE(v.qtd_votos, 0)) AS total_votos,
          json_agg(
            json_build_object(
              'id', c.id,
              'nome', u.nome,
              'curso_semestre', a.curso_semestre,
              'quantidade_de_votos', COALESCE(v.qtd_votos, 0)
            )
          ) AS candidatos
        FROM "Evento" e
        INNER JOIN "Candidato" c ON c.id_evento = e.id_evento
        INNER JOIN "Aluno" a ON a.id_aluno = c.id_aluno
        INNER JOIN "Usuario" u ON u.id = a.fk_id_usuario
        LEFT JOIN (
          SELECT 
            id_candidato, 
            COUNT(*) AS qtd_votos
          FROM "Voto"
          GROUP BY id_candidato
        ) v ON v.id_candidato = c.id
        WHERE e.tipo_evento = 'Interno'
        AND e.status_evento = 'Ativo'
        AND e.curso_semestre = '${curso}'
        GROUP BY e.id_evento, e.nome_evento, e.descricao_evento, e.curso_semestre, e.data_inicio, e.data_fim;
      `;
    try {
      const result = await AppDataSource.query(query);

      console.log(
        `Dados do Evento Interno do Curso ${curso} obtidos com sucesso!`
      );
      return result;
    } catch (error) {
      console.log(
        `Erro ao executar consulta de evento Interno do curso ${curso}: `,
        error
      );
      throw error; // Repassa o erro para o controller lidar
    }
  }

  //Próximas funções:.....
  
}

export default new DashBoardInterna();
