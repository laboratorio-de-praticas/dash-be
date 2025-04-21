import { EntitySchema } from "typeorm";
const ProjetoODS = new EntitySchema({
  name: "ProjetoODS",
  tableName: "ProjetoODS",
  columns: {
    projeto_id: {
      type: "int",
      primary: true,
    },
    ods_id: {
      type: "int",
      primary: true,
    },
  },
});
export default ProjetoODS;
