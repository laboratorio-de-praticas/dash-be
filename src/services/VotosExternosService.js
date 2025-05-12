import {AppDataSource} from '../config/data-source.js';
class VotosExternosService {
  async findLogDeVotosByEventoId(eventoId) {
    const query = `    
        SELECT 
            ve.id_voto,
            to_char(ve.data_criacao, 'DD/MM/YYYY HH24:MI:SS') AS "data_hora_voto",
            
            -- Informações do visitante que votou
            v.id_visitante AS "id_visitante",
            v.nome AS "nome_visitante",
            v.telefone AS "telefone_visitante",

            -- Informações do projeto votado
            p.id_projeto AS "id_projeto",
            p.titulo AS "nome_projeto",

            -- Evento relacionado
            e.id_evento AS "id_evento",
            e.nome_evento AS "nome_evento"

        FROM "VotosExternos" ve
        INNER JOIN "Visitantes" v ON v.id_visitante = ve.fk_id_visitante
        INNER JOIN "Projetos" p ON p.id_projeto = ve.fk_id_projeto
        INNER JOIN "Eventos" e ON e.id_evento = ve.fk_id_evento

        WHERE e.id_evento = $1
        ORDER BY ve.data_criacao DESC;
    `;

    console.log('Procurando');
    const response = await AppDataSource.query(query, [eventoId]);
    return response;
  }
}
export default new VotosExternosService();
