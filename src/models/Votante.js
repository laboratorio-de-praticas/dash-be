import { EntitySchema, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

const Votante = new EntitySchema({
  name: "votantes", // Will use table name `post` as default behaviour.
  tableName: "votantes",
  columns: {
    id:{
      primary: true,
      type: "uuid",
      generated: true,
    },
    nome: {
      primary: false,
      type: "varchar",
      nullable: true
    },
    situacao_votante: {
      primary: false,
      type: "varchar",
      nullable: true
    }
  }
})

export default Votante
