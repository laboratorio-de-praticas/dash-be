import { EntitySchema } from "typeorm";
import EventoStatus from "./enums/EventoStatus.js";
import EventoTipos from "./enums/EventoTipos.js";
const Evento = new EntitySchema({
  name: "Evento",
  tableName: "Evento",
  columns: {
    id_evento: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    tipo_evento: {
      type: "enum",
      enum: EventoTipos,
      nullable: false,
    },
    nome_evento: {
      type: "text",
      nullable: true,
    },
    descricao_evento: {
      type: "text",
      nullable: true,
    },
    status_evento: {
      type: "enum",
      enum: EventoStatus,
      nullable: false,
    },
    curso_semestre: {
      type: "text",
      nullable: true,
    },
    data_inicio: {
      type: "timestamp",
      nullable: true,
    },
    data_fim: {
      type: "timestamp",
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

export default Evento;