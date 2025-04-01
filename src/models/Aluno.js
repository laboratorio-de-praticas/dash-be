import { EntitySchema } from "typeorm";

const Aluno = new EntitySchema({
  name: "Aluno",
  tableName: "alunos",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },       
    id_projeto: {
      type: "uuid",
      nullable: true,
    },
    foto_url: {
      type: "varchar",
      nullable: false,
    },
    data_criacao: {
      type: "timestamp",
      createDate: true,
    },
    data_alteracao: {
      type: "timestamp",
      updateDate: true,
    },
    data_ingresso: {
      type: "timestamp",
      nullable: false,
    },
    curso_semestre: {
      type: "varchar",
      nullable: false,
    },
  },
  relations:{
    usuario: {
        type: "one-to-one",
        target: "Usuario",
        joinColumn: {
          name: "id_usuario",          
        },
        nullable: true,
      },
  }
});

export default Aluno;
