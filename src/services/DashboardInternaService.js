import {AppDataSource} from '../config/data-source.js';
import NotFoundError from '../errors/NotFoundError.js';
class DashBoardInterna {
  // Método para buscar dados para o dashboard  de eventos Interno Ativo de todos os cursos_semestres
  async findEventosInternoGeralAtivo() {
    const query = `
        SELECT 
          e.id_evento,
          e.tipo_evento, 
          e.nome_evento, 
          e.descricao_evento, 
          e.status_evento, 
          e.curso_semestre, 
          e.ano_semestre, 
          e.data_inicio, 
          e.data_fim,

          -- Total de alunos do curso/semestre desse evento
          (SELECT COUNT(*) 
          FROM "Alunos" a 
          WHERE a.curso_semestre = e.curso_semestre) AS total_alunos,

          -- Total de votos válidos (já registrados)
          (SELECT COUNT(*) 
          FROM "VotosInternos" vi 
          WHERE vi.fk_id_evento = e.id_evento) AS votos_validos,

          -- Votos pendentes = Total de alunos - votos válidos
          ((SELECT COUNT(*) 
            FROM "Alunos" a 
            WHERE a.curso_semestre = e.curso_semestre)
          -
          (SELECT COUNT(*) 
            FROM "VotosInternos" vi 
            WHERE vi.fk_id_evento = e.id_evento)
          ) AS votos_pendentes,

          -- Quantidade de candidatos ativos (representantes do evento)
          (SELECT COUNT(*) 
          FROM "Representantes" r 
          WHERE r.fk_id_evento = e.id_evento) AS candidatos_ativos,

          -- Votos por dia
          (
            SELECT json_agg(vpd)
            FROM (
              SELECT 
                to_char(vi.data_criacao, 'YYYY-MM-DD') AS data,
                COUNT(*) AS qtd_votos
              FROM "VotosInternos" vi
              WHERE vi.fk_id_evento = e.id_evento
              GROUP BY vi.data_criacao
              ORDER BY vi.data_criacao
            ) AS vpd
          ) AS votos_por_dia
        FROM "Eventos" e
        WHERE e.tipo_evento = 'Interno' AND e.status_evento = 'Ativo'
        ORDER BY e.curso_semestre ASC, e.data_inicio DESC;
    `;

    const result = await AppDataSource.query(query);

    if (!result || result.length === 0) {
      throw new NotFoundError('Nenhum evento interno ativo encontrado.');
    }

    console.log('Dados do Evento Interno Geral obtidos com sucesso!');
    return result;
  }

  // Método para buscar dados para o dashboard de eventos Interno Ativo de um cursos_semestre especifico
  async findEventoInternoByCurso(cursoSemestre) {
    const query = `
        SELECT 
          e.id_evento,
          e.tipo_evento, 
          e.nome_evento, 
          e.descricao_evento, 
          e.status_evento, 
          e.curso_semestre, 
          e.ano_semestre, 
          to_char(e.data_inicio, 'DD/MM/YYYY') AS data_inicio, 
          to_char(e.data_fim, 'DD/MM/YYYY') AS data_fim,

          -- Total de alunos do curso/semestre desse evento
          (SELECT COUNT(*) 
          FROM "Alunos" a 
          WHERE a.curso_semestre = e.curso_semestre) AS total_alunos,

          -- Total de votos válidos (já registrados)
          (SELECT COUNT(*) 
          FROM "VotosInternos" vi 
          WHERE vi.fk_id_evento = e.id_evento) AS votos_validos,

          -- Votos pendentes = Total de alunos - votos válidos
          ((SELECT COUNT(*) 
            FROM "Alunos" a 
            WHERE a.curso_semestre = e.curso_semestre)
          -
          (SELECT COUNT(*) 
            FROM "VotosInternos" vi 
            WHERE vi.fk_id_evento = e.id_evento)
          ) AS votos_pendentes,

          -- Quantidade de candidatos ativos (representantes do evento)
          (SELECT COUNT(*) 
          FROM "Representantes" r 
          WHERE r.fk_id_evento = e.id_evento) AS candidatos_ativos,

          -- Votos por dia
          (
            SELECT json_agg(vpd)
            FROM (
              SELECT 
                to_char(vi.data_criacao, 'DD/MM/YYYY') AS data,
                COUNT(*) AS qtd_votos
              FROM "VotosInternos" vi
              WHERE vi.fk_id_evento = e.id_evento
              GROUP BY vi.data_criacao
              ORDER BY vi.data_criacao
            ) AS vpd
          ) AS votos_por_dia,

          -- Candidatos 
          (
            SELECT json_agg(representantes)
            FROM (
              SELECT 
              r.id_representante,
              r.descricao_campanha,
              r.representantesituacao as representante_situacao,
              u.nome,                           
              a.curso_semestre,
              a.foto_url,
              (
                SELECT count(*) as qtd_votos_recebidos from "VotosInternos" vi 
                where vi.fk_id_representante = r.id_representante
                AND vi.fk_id_evento = e.id_evento 
              )
              FROM "Representantes" r
              INNER JOIN "Alunos" a ON a.id_aluno = r.fk_id_aluno
              INNER JOIN "Usuarios" u ON u.id = a.fk_id_usuario
              WHERE r.fk_id_evento = e.id_evento
              group by r.id_representante, u.nome, a.curso_semestre, a.foto_url
            ) AS representantes
          ) AS candidatos
           
        FROM "Eventos" e
        WHERE e.tipo_evento = 'Interno' AND e.status_evento = 'Ativo' AND  e.curso_semestre = $1
        ORDER BY e.curso_semestre ASC, e.data_inicio DESC;
      `;
    // Executa a consulta no banco de dados
    const result = await AppDataSource.query(query, [cursoSemestre]);

    if (!result || result.length === 0) {
      throw new NotFoundError(
        `Nenhum evento interno ativo encontrado para curso ${cursoSemestre}`,
      );
    }

    console.log(
      `Dados do Evento Interno do Curso ${cursoSemestre} obtidos com sucesso!`,
    );

    return result[0];
  }
}

export default new DashBoardInterna();
