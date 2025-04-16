import {EntitySchema} from 'typeorm';

const Categoria = new EntitySchema({
  name: 'Categoria',
  tableName: 'Categoria',
  columns: {
    id_categoria: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    nome: {
      type: 'text',
      nullable: true,
    },
    descricao: {
      type: 'text',
      nullable: true,
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

export default Categoria;
