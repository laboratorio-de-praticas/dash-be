import { EntitySchema, Exclusion } from "typeorm";

const Avaliador = new EntitySchema({
  name: "Avaliador",
  tableName: "Avaliadores",
  columns: {
    id_avaliador: {
      type: "int",
      primary: true,
      generated: true,
    },
    nome: {
      type: "text",
      nullable: true,
    },
    telefone: {
      type: "text",
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
  uniques: [
    {
      columns: ["fk_id_usuario"],
    },
  ],
});
export default Avaliador;
