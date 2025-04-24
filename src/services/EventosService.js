import {AppDataSource} from '../config/data-source.js';
const repository = AppDataSource.getRepository('Evento');

class EventosService {
  async findAll() {
    console.log(`Buscando Todos os Eventos...`);

    const eventos = await repository
      .createQueryBuilder('evento')
      .select([
        'evento.id_evento',
        'evento.tipo_evento',
        'evento.nome_evento',
        'evento.descricao_evento',
        'evento.status_evento',
        'evento.curso_semestre',
        'evento.ano_semestre',
        `to_char(evento.data_inicio, 'DD/MM/YYYY') AS data_inicio`,
        `to_char(evento.data_fim, 'DD/MM/YYYY') AS data_fim`,
        `to_char(evento.data_criacao, 'DD/MM/YYYY') AS data_criacao`,
        `to_char(evento.data_alteracao, 'DD/MM/YYYY') AS data_alteracao`,
      ])
      .orderBy('evento.curso_semestre', 'ASC')
      .getRawMany();

    console.log(`Fim da Busca de Eventos...`);

    return eventos;
  }

  async findAllByTipo(eventoTipo) {
    console.log(`Buscando Todos Eventos do Tipo: ${eventoTipo}`);

    const eventos = await repository
      .createQueryBuilder('evento')
      .select([
        'evento.id_evento',
        'evento.tipo_evento',
        'evento.nome_evento',
        'evento.descricao_evento',
        'evento.status_evento',
        'evento.curso_semestre',
        'evento.ano_semestre',
        `to_char(evento.data_inicio, 'DD/MM/YYYY') AS data_inicio`,
        `to_char(evento.data_fim, 'DD/MM/YYYY') AS data_fim`,
        `to_char(evento.data_criacao, 'DD/MM/YYYY') AS data_criacao`,
        `to_char(evento.data_alteracao, 'DD/MM/YYYY') AS data_alteracao`,
      ])
      .where('evento.tipo_evento = :tipo', {tipo: eventoTipo})
      .orderBy('evento.curso_semestre', 'ASC')
      .getRawMany();
    console.log(`Fim da Busca de Eventos do Tipo: ${eventoTipo}`);
    return eventos;
  }

  async findAllByStatus(eventoStatus) {
    console.log(`Buscando Todos Eventos com status: ${eventoStatus}`);

    const eventos = await repository
      .createQueryBuilder('evento')
      .select([
        'evento.id_evento',
        'evento.tipo_evento',
        'evento.nome_evento',
        'evento.descricao_evento',
        'evento.status_evento',
        'evento.curso_semestre',
        'evento.ano_semestre',
        `to_char(evento.data_inicio, 'DD/MM/YYYY') AS data_inicio`,
        `to_char(evento.data_fim, 'DD/MM/YYYY') AS data_fim`,
        `to_char(evento.data_criacao, 'DD/MM/YYYY') AS data_criacao`,
        `to_char(evento.data_alteracao, 'DD/MM/YYYY') AS data_alteracao`,
      ])
      .where('evento.status_evento = :status', {status: eventoStatus})
      .orderBy('evento.curso_semestre', 'ASC')
      .getRawMany();

    console.log(`Fim da Busca de Eventos com status: ${eventoStatus}`);
    return eventos;
  }

  async findAllByStatusAndTipo(eventoStatus, eventoTipo) {
    console.log(
      `Buscando Todos Eventos com status: ${eventoStatus} e tipo ${eventoTipo}`,
    );

    const eventos = await repository
      .createQueryBuilder('evento')
      .select([
        'evento.id_evento',
        'evento.tipo_evento',
        'evento.nome_evento',
        'evento.descricao_evento',
        'evento.status_evento',
        'evento.curso_semestre',
        'evento.ano_semestre',
        `to_char(evento.data_inicio, 'DD/MM/YYYY') AS data_inicio`,
        `to_char(evento.data_fim, 'DD/MM/YYYY') AS data_fim`,
        `to_char(evento.data_criacao, 'DD/MM/YYYY') AS data_criacao`,
        `to_char(evento.data_alteracao, 'DD/MM/YYYY') AS data_alteracao`,
      ])
      .where('evento.status_evento = :status', {status: eventoStatus})
      .andWhere('evento.tipo_evento = :tipo', {tipo: eventoTipo})
      .orderBy('evento.curso_semestre', 'ASC')
      .getRawMany();

    console.log(
      `Fim da Busca de Eventos com status: ${eventoStatus} e tipo ${eventoTipo}`,
    );
    return eventos;
  }
}

export default new EventosService();
