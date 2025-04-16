import { EntitySchema } from "typeorm";

const VotosExternos = new EntitySchema({
  name: "VotosExternos",
  tableName: "VotosExternos",
  columns: {
    id_voto: {
      type: "int",
      primary: true,
      generated: "increment",
    },
    fk_id_evento: {
      type: "int",
      nullable: false,
    },
    fk_id_projeto: {
      type: "int",
      nullable: false,
    },
    fk_id_visitante: {
      type: "int",
      nullable: true,
    },
    fk_id_avaliador: {
      type: "int",
      nullable: true,
    },
    data_criacao: {
      type: "timestamp",
      createDate: true,
    },
  },
  uniques: [
    {
      columns: ["fk_id_evento", "fk_id_visitante", "fk_id_projeto"],
    },
    {
      columns: ["fk_id_evento", "fk_id_avaliador", "fk_id_projeto"],
    },
  ],
});
export default VotosExternos;
