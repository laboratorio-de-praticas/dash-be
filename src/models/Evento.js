import { EntitySchema } from "typeorm";

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
      type: "varchar",
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
      type: "varchar",
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
