import {EntitySchema} from 'typeorm';

const Projeto = new EntitySchema({
  name: 'Projeto',
  tableName: 'Projeto', // Nome da tabela no banco de dados
  columns: {
    id_projeto: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    titulo: {
      type: 'text',
      nullable: false, // Coluna obrigatória
    },
    descricao: {
      type: 'text',
      nullable: false, // Coluna obrigatória
    },
    data_criacao: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP', // Valor padrão para a data de criação
    },
    data_alteracao: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP', // Valor padrão para a data de alteração
    },
  },
});

export default Projeto;
