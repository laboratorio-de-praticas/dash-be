import { EntitySchema } from "typeorm";
import { TipoEvento } from "./enums/TipoEvento.js";
const Evento = new EntitySchema({
  name: "Evento",
  tableName: "eventos",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    nome: {
      type: "varchar",
      nullable: false,
    },
    tipo_evento: {
      type: "enum",
      enum: TipoEvento,
      default: TipoEvento.Interno,
      nullable: false,
    },
    data_inicio: {
      type: "timestamp",
      nullable: false,
    },
    data_fim: {
      type: "timestamp",
      nullable: false,
    },
    descricao: {
      type: "varchar",
      nullable: false,
    },
    status: {
      type: "varchar",
      nullable: false,
    },
    data_alteracao: {
      type: "timestamp",
      updateDate: true,
    },
    data_criacao: {
      type: "timestamp",
      createDate: true,
    },
    curso_semestre: {
      type: "varchar",
      nullable: false,
    },
  },
});

export default Evento;
