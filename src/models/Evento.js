import { EntitySchema } from "typeorm";
import EventoTipos from "./enums/EventoTipos.js";
import EventoStatus from "./enums/EventoStatus.js";

const Evento = new EntitySchema({
  name: "Evento",
  tableName: "Eventos",
  columns: {
    id_evento: {
      type: "int",
      primary: true,
      generated: "increment",
    },
    tipo_evento: {
      type: 'enum',
      enum: EventoTipos,
      nullable: false,
    },
    nome_evento: {
      type: 'text',
      nullable: true,
    },
    descricao_evento: {
      type: 'text',
      nullable: true,
    },
    status_evento: {
      type: 'enum',
      enum: EventoStatus,
      nullable: false,
    },
    curso_semestre: {
      type: "text",
      nullable: true,
    },
    ano_semestre: {
      type: "text",
      nullable: true,
    },
    data_inicio: {
      type: 'timestamp',
      nullable: true,
    },
    data_fim: {
      type: 'timestamp',
      nullable: true,
    },
    data_criacao: {
      type: "timestamp",
      createDate: true,
    },
    data_alteracao: {
      type: "timestamp",
      updateDate: true,
    },
  },
});
export default Evento;
