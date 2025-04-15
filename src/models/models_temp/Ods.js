import { EntitySchema } from "typeorm";
const Ods = new EntitySchema({
  name: "ODS",
  tableName: "ODS",
  columns: {
    id_ods: {
      type: "int",
      primary: true,
      generated: true,
    },
    descricao: {
      type: "text",
      nullable: false
    },
  },
});

export default Ods;