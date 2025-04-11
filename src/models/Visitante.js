import { EntitySchema } from "typeorm";

const Visitante = new EntitySchema({
  name: "Visitante",
  tableName: "Visitante",
  columns: {
    id_visitante: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    nome_social: {
      type: "text",
      nullable: true,
    },
    celular: {
      type: "text",
      nullable: true,
    },
    data_nascimento: {
      type: "timestamp",
      nullable: true,
    },
    chave_acesso: {
      type: "char",
      length: 4,
      nullable: true,
    },
  },
});

export default Visitante;
