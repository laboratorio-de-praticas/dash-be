import {AppDataSource} from '../config/data-source.js';
import NotFoundError from '../errors/NotFoundError.js';
class DashBoardInterna {
  async findEventosExternosGeralAtivo() {
    const query = `
        SELECT 
            e.id_evento,
            e.tipo_evento,
            e.nome_evento,
            e.descricao_evento,
            e.status_evento,
            to_char(e.data_inicio, 'DD/MM/YYYY') AS data_inicio,
            to_char(e.data_fim, 'DD/MM/YYYY') AS data_fim,

            -- Total de votos válidos (externos)
            (
                SELECT COUNT(*) 
                FROM "VotosExternos" ve 
                WHERE ve.fk_id_evento = e.id_evento
            ) AS total_votos_evento,

            -- Total de projetos no evento
            (
                SELECT COUNT(DISTINCT pe.fk_id_projeto)
                FROM "ProjetosEventos" pe 
                WHERE pe.fk_id_evento = e.id_evento
            ) AS total_projetos_evento,

            -- Total de visitantes únicos que votaram
            (
                SELECT COUNT(DISTINCT ve.fk_id_visitante)
                FROM "VotosExternos" ve
                WHERE ve.fk_id_evento = e.id_evento
            ) AS total_visitantes_votantes,

            -- Votos por dia (json)
            (
                SELECT json_agg(vpd)
                FROM (
                    SELECT 
                        to_char(ve.data_criacao::date, 'DD/MM/YYYY') AS data,
                        COUNT(*) AS qtd_votos
                    FROM "VotosExternos" ve
                    WHERE ve.fk_id_evento = e.id_evento
                    GROUP BY ve.data_criacao::date
                    ORDER BY ve.data_criacao::date
                ) AS vpd
            ) AS votos_por_dia,

            -- Projetos participantes com informações detalhadas
            (
                SELECT json_agg(projetos)
                FROM (
                    SELECT 
                        p.id_projeto,
                        p.titulo AS nome_projeto,
                        p.descricao,
                        p.nome_equipe,
                        p.turma,
                        p.foto_url,

                        -- Integrantes
                        (
                            SELECT STRING_AGG(DISTINCT u.nome, ', ')
                            FROM "IntegrantesEquipe" ie
                            JOIN "Alunos" a ON a.id_aluno = ie.aluno_id
                            JOIN "Usuarios" u ON u.id = a.fk_id_usuario
                            WHERE ie.projeto_id = p.id_projeto
                        ) AS integrantes,

                        -- Categorias (Áreas de atuação)
                        (
                            SELECT STRING_AGG(DISTINCT c.descricao, ', ')
                            FROM "CategoriasProjetos" cp
                            JOIN "Categorias" c ON c.id_categoria = cp.fk_id_categoria
                            WHERE cp.fk_id_projeto = p.id_projeto
                        ) AS categorias,

                        -- ODS vinculadas
                        (
                            SELECT STRING_AGG(DISTINCT o.descricao, ', ')
                            FROM "ProjetoODS" po
                            JOIN "ODS" o ON o.id_ods = po.ods_id
                            WHERE po.projeto_id = p.id_projeto
                        ) AS ods,

                        -- Linhas de extensão
                        (
                            SELECT STRING_AGG(DISTINCT le.descricao, ', ')
                            FROM "ProjetoLinhaExtensao" ple
                            JOIN "LinhaExtensao" le ON le.id_linha = ple.linha_extensao_id
                            WHERE ple.projeto_id = p.id_projeto
                        ) AS linhas_extensao,

                        -- Imagens do projeto
                        (
                            SELECT json_agg(img)
                            FROM (
                                SELECT ip.id_imagem, ip.imagem_url
                                FROM "ImagensProjeto" ip
                                WHERE ip.projeto_id = p.id_projeto
                            ) AS img
                        ) AS imagens_projeto,

                        -- Votos recebidos
                        (
                            SELECT COUNT(*) 
                            FROM "VotosExternos" ve
                            WHERE ve.fk_id_projeto = p.id_projeto AND ve.fk_id_evento = e.id_evento
                        ) AS votos_recebidos

                    FROM "ProjetosEventos" pe
                    JOIN "Projetos" p ON p.id_projeto = pe.fk_id_projeto
                    WHERE pe.fk_id_evento = e.id_evento
                ) AS projetos
            ) AS projetos_participantes

        FROM "Eventos" e
        WHERE e.tipo_evento = 'Externo' AND e.status_evento = 'Ativo'
        ORDER BY e.data_inicio DESC;
    `;
    const result = await AppDataSource.query(query);
    if (!result || result.length === 0) {
      throw new NotFoundError('Nenhum evento externo ativo encontrado.');
    }

    console.log('Dados do Evento Externo Geral obtidos com sucesso!');
    return result;
  }
}
export default new DashBoardInterna();
