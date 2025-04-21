import {EntitySchema} from 'typeorm';

const Projeto = new EntitySchema({
  name: 'Projeto',
  tableName: 'Projetos', // Nome da tabela no banco de dados
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
    foto_url: {
      type: 'text',
      nullable: true,
    },
    trl: {
      type: 'int',
      nullable: false, // Coluna obrigatória
    },
    cea: {
      type: 'int',
      nullable: false, // Coluna obrigatória
    },
    turma: {
      type: 'text',
      nullable: false, // Coluna obrigatória
    },
    ativo: {
      type: 'boolean',
      default: true,
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
