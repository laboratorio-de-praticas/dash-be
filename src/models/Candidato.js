import { EntitySchema } from "typeorm";

const Candidato = new EntitySchema({
  name: "candidato",
  tableName: "candidatos",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    id_aluno: {
      type: "uuid",
      nullable: true,
    },    
    id_projeto: {
      type: "uuid",
      nullable: true,
    },
    id_evento: {
      type: "uuid",
      nullable: true,
    },
    situacao_candidato: {
      type: "varchar",
      nullable: false,
    },
    qrcode: {
      type: "bytea",
      nullable: false,
    },
  },
  relations: {
    id_aluno: {
      type: "One-to-one",
      target: "Aluno",
      joinColumn: true,
      nullable: true,
    },
    id_evento: {
      type: "Many-to-one",
      target: "Evento",
      joinColumn: true,
      nullable: true,
    },
  },
});

export default Candidato;
