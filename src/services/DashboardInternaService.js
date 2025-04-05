import { AppDataSource } from "../config/data-source.js";

//Provável que os endpoints principais levem para esse service que utiliza os outros services como apoio para recuperar o dado requerido
class DashBoardInterna {
  async findDashboardInternoGeral() {
    const query = `
        SELECT
          e.id_evento,
          e.nome_evento,
          e.data_inicio,
          e.data_fim,
          c.id_candidato,
          c.nome AS candidato_nome,
          COUNT(v.id_voto) AS votos_count,
          cu.nome AS curso_nome,
          sa.nome AS sala_nome
        FROM
          "Evento" e
        JOIN
          "Candidato" c ON c.id_evento = e.id_evento
        LEFT JOIN
          "Voto" v ON v.id_candidato = c.id_candidato
        LEFT JOIN
          "Aluno" a ON a.id_aluno = v.id_participante
        LEFT JOIN
          "Curso" cu ON cu.id_curso = a.id_curso
        LEFT JOIN
          "Sala" sa ON sa.id_sala = a.id_sala
        GROUP BY
          e.id_evento, c.id_candidato, cu.nome, sa.nome
        ORDER BY
          e.data_inicio DESC;
      `;

    const queryTeste = `Select * from "Evento" e`;

    const result = await AppDataSource.query(queryTeste);

    console.log("Dados do Dashboard Interno Geral obtidos com sucesso!");
    return result;
}catch(error) {
    console.log("Erro ao executar consulta do Dashboard:", error);
    throw error; // Repassa o erro para o controller lidar
  }
}

export default new DashBoardInterna();
