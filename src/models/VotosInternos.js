import {EntitySchema} from 'typeorm';

const VotosInternos = new EntitySchema({
  name: 'VotosInternos',
  tableName: 'VotosInternos',
  columns: {
    id_voto: {
      type: 'int',
      primary: true,
      generated: 'increment',
    },
    fk_id_evento: {
      type: 'int',
      nullable: false,
    },
    fk_id_aluno: {
      type: 'int',
      nullable: false,
    },
    fk_id_representante: {
      type: 'int',
      nullable: false,
    },
    data_criacao: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
  uniques: [
    {
      columns: ['fk_id_evento', 'fk_id_aluno'],
    },
  ],
});
export default VotosInternos;
