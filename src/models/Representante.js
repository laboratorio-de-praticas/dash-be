import EntitySchema from "typeorm";
import RepresentanteSituacao from "./enums/RepresentanteSituacao";

const Representante = new EntitySchema({
  name: "Representante",
  tableName: "Representantes",
  columns: {
    id_represesntante: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    qrcode: {
      type: "text",
      nullabe: true,
    },
    RepresentanteSituacao: {
      type: "enum",
      enum: RepresentanteSituacao,
      nullabe: false,
    },
    data_criacao: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    data_alteracao: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    fk_id_aluno:{
        type: "int",
        nullable: false
    }
  },
});
