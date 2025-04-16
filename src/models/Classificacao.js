import {EntitySchema} from 'typeorm';

const Classificacao = new EntitySchema({
  name: 'Classificacao',
  tableName: 'Classificacao',
  columns: {
    id_classificacao: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    id_participante: {
      type: 'int',
      nullable: false,
    },
    id_projeto: {
      type: 'int',
      nullable: false,
    },
    estrelas: {
      type: 'int',
      nullable: false,
    },
    data_criacao: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
});

export default Classificacao;
