import { EntitySchema } from "typeorm";

const Usuario = new EntitySchema({
  name: "Usuario",
  tableName: "usuarios",
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
    senha: {
      type: "varchar",
      nullable: false,
    },
    email_institucional: {
      type: "varchar",
      nullable: false,
    },
    tipo_usuario: {
      type: "varchar",
      nullable: false,
    },
    data_criacao: {
      type: "timestamp",
      createDate: true,
    },
    data_alteracao: {
      type: "timestamp",
      updateDate: true,
    },
    status_usuario: {
      type: "varchar",
      nullable: false,
    },
  },
});

export default Usuario;
