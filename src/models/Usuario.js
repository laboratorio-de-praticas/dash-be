import { EntitySchema } from "typeorm";
import UsuarioStatus from "./enums/UsuarioStatus.js";
import UsuarioTipos from "./enums/UsuarioTipos.js";
const Usuario = new EntitySchema({
  name: "Usuario",
  tableName: "Usuarios",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    nome: {
      type: "text",
    },
    senha: {
      type: "text",
    },
    telefone: {
      type: "text",
    },
    email_institucional: {
      type: "text",
      nullable: false,
    },
    tipo_usuario: {
      type: "enum",
      enum: UsuarioTipos,
      nullable: false,
    },
    status_usuario: {
      type: "enum",
      enum: UsuarioStatus,
      nullable: false,      
    },
    data_criacao: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP", // Usando o valor default como no SQL
    },
    data_alteracao: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP", // Definido com CURRENT_TIMESTAMP como no SQL
    },
  },
  uniques: [
    {
      columns: ["email_institucional"],
    },
  ],
});

export default Usuario;
