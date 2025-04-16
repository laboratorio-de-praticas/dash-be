import {EntitySchema} from 'typeorm';

const CategoriasProjeto = new EntitySchema({
  name: 'CategoriasProjeto',
  tableName: 'CategoriasProjeto',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    fk_id_projeto: {
      type: 'int',
      nullable: false,
    },
    fk_id_categoria: {
      type: 'int',
      nullable: false,
    },
    data_criacao: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
    data_alteracao: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
});

export default CategoriasProjeto;
