import { EntitySchema } from "typeorm";

const Aluno = new EntitySchema({
  name: "Aluno",
  tableName: "Aluno",
  columns: {
    id_aluno: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    foto_url: {
      type: "text",
      nullable: true,
    },
    data_ingresso: {
      type: "timestamp",
      nullable: true,
    },
    data_criacao: {
      type: "timestamp", 
      default: () => "CURRENT_TIMESTAMP",
    },
    data_alteracao: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP", 
    },
    curso_semestre: {
      type: "text",
      nullable: true,
    },
    fk_id_usuario: {
      type: "int",
      nullable: false,
    },
  },
});

export default Aluno;
