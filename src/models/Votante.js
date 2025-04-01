import { EntitySchema } from "typeorm";

const Votante = new EntitySchema({
  name: "Votante",
  tableName: "votantes",
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
    id_vistante: {
      type: "uuid",              
      nullable: true,
    },
    id_evento: {
      type: "uuid",
      nullable: true,
    },
    situacao_votante: {
      type: "varchar",
      nullable: false,
    },    
  },
  relations: {
    id_aluno: {
      type: "many-to-one",
      target: "Aluno",
      joinColumn: true,
      nullable: true,
    },   
    id_evento: {
      type: "many-to-one",
      target: "Evento",
      joinColumn: true,
      nullable: true,
    },
  },
});

export default Votante;
