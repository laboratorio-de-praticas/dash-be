import { EntitySchema, Exclusion } from "typeorm";

const Visitante = new EntitySchema({
  name: "Visitante",
  tableName: "Visitantes",
  columns: {
    id_visitante: {
      type: "int",
      primary: true,
      generated: true,
    },
    nome: {
      type: "text",
      nullable: false,
    },
    telefone: {
      type: "text",
      nullable: false,
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
