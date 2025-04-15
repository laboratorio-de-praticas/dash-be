import { EntitySchema } from "typeorm";
import UsuarioStatus from "./enums/UsuarioStatus.js";
import UsuarioTipos from "./enums/UsuarioTipos.js";
const Usuario = new EntitySchema({
  name: "Usuario",
  tableName: "Usuario",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: "increment",
    },
    nome: {
      type: "text",
      nullable: false,
    },
    senha: {
      type: "text",
      nullable: false,
    },
    telefone: {
      type: "text",
      nullable: true,
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
});

export default Usuario;
