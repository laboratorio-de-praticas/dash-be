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
    nome: {
      type: "text",
      nullable: true,
    },
    telefone: {
      type: "text",
      nullable: true,
    },
    chave_acesso: {
      type: "char",
      length: 4,
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
  },
});

export default Visitante;
