import {EntitySchema} from 'typeorm';

const Aluno = new EntitySchema({
  name: 'Aluno',
  tableName: 'Alunos',
  columns: {
    id_aluno: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    foto_url: {
      type: 'text',
      nullable: true,
    },
    data_matricula: {
      type: 'timestamp',
      nullable: true,
    },
    deseja_ser_candidato: {
      type: 'boolean',
      default: false,
    },
    curso_semestre: {
      type: 'text',
      nullable: true,
    },
    ra: {
      type: 'int',
      unique: true,
    },
    data_criacao: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
    data_alteracao: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },

    fk_id_usuario: {
      type: 'int',
      nullable: false,
    },
  },
});

export default Aluno;
