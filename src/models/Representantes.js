import { EntitySchema } from "typeorm";
import RepresentanteSituacao from "./enums/RepresentanteSituacao.js";
const Representante = new EntitySchema({
  name: "Representante",
  tableName: "Representantes",
  columns: {
    id_representante: {
      type: "int",
      primary: true,
      generated: "increment",
    },
    descricao_campanha: {
      type: "text",
      nullable: true,
    },
    fk_id_aluno: {
      type: "int",
      nullable: false,
      unique: true,
    },
    fk_id_evento: {
      type: "int",
      nullable: false,
    },
    qrcode: {
      type: "text",
      nullable: true,
    },
    RepresentanteSituacao: {
      type: "enum",
      enum: RepresentanteSituacao,
      nullable: false,
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
export default Representante;
