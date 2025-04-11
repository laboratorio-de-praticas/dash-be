import { EntitySchema } from "typeorm";
import CandidatoSituacao from "./enums/CandidatoSituacao.js";

const Candidato = new EntitySchema({
  name: "Candidato",
  tableName: "Candidato",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    id_aluno: {
      type: "int",
      nullable: false,
    },
    id_projeto: {
      type: "int",
      nullable: false,
    },
    id_evento: {
      type: "int",
      nullable: false,
    },
    qrcode: {
      type: "text",
      nullable: true,
    },
    situacao_candidato: {
      type: "enum",
      enum: CandidatoSituacao,
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

export default Candidato;
