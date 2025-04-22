import {AppDataSource} from '../config/data-source.js';
import NotFoundError from '../errors/NotFoundError.js';
class VotoInternoService {
  async findLogDeVotosByEventoId(eventoId) {
    const query = `    
        SELECT 
        vi.id_voto,
        to_char(vi.data_criacao, 'DD/MM/YYYY HH24:MI:SS') as "data_hora_voto",
        a_votante.id_aluno as "id_aluno_votante",
        u_votante.nome AS "nome_votante",
        a_votante.curso_semestre as "curso_semestre_votante",
        a_votante.foto_url as "foto_url_votante",
        a_representante.id_aluno AS "id_aluno_representante",
        u_representante.nome AS "nome_representante",
        a_representante.curso_semestre as "curso_semestre_representante",
        e.id_evento AS "id_evento",
        e.nome_evento AS "nome_evento"

        FROM "VotosInternos" vi
        INNER JOIN "Alunos" a_votante ON a_votante.id_aluno = vi.fk_id_aluno
        INNER JOIN "Usuarios" u_votante ON u_votante.id = a_votante.fk_id_usuario

        INNER JOIN "Representantes" r ON r.id_representante = vi.fk_id_representante
        INNER JOIN "Alunos" a_representante ON a_representante.id_aluno = r.fk_id_aluno
        INNER JOIN "Usuarios" u_representante ON u_representante.id = a_representante.fk_id_usuario
        inner join "Eventos" e on e.id_evento = vi.fk_id_evento
        where e.id_evento = 1
        ORDER BY vi.data_criacao DESC;
    `;

    const response = await AppDataSource.query(query);
    return response;
  }
}

export default new VotoInternoService();
