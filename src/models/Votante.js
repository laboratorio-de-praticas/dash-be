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
    id_visitante: {
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
      joinColumn: {
        name: "id_aluno",
      },
      nullable: true,
    },   
    id_evento: {
      type: "many-to-one",
      target: "Evento",
      joinColumn: {
        name: "id_evento",
      },
      nullable: true,
    },
  },
});

export default Votante;
