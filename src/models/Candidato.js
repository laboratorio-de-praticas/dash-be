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
    id_projeto: {
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
    aluno: {
      type: "many-to-one",
      target: "Aluno",
      joinColumn: {
        name: "id_aluno",      
      },  
      nullable: true,
    },
    evento: {
      type: "many-to-one",
      target: "Evento",
      joinColumn: {
        name: "id_evento",
      },
      nullable: true,
    },
  },
});

export default Candidato;
