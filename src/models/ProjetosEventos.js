import {EntitySchema} from 'typeorm';

const ProjetosEventos = new EntitySchema({
  name: 'ProjetosEventos',
  tableName: 'ProjetosEventos',
  columns: {
    id_projetos_eventos: {
      type: 'int',
      primary: true,
      generated: 'increment',
    },
    fk_id_projeto: {
      type: 'int',
      nullable: false,
    },
    fk_id_evento: {
      type: 'int',
      nullable: false,
    },
    qrcode: {
      type: 'text',
      nullable: true,
    },
  },
});
export default ProjetosEventos;
