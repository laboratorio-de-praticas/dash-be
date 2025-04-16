import { EntitySchema } from "typeorm";

const Categoriaa = new EntitySchema({
  name: "Categoria",
  tableName: "Categorias",
  columns: {
    id_categoria: {
      type: "int",
      primary: true,
      generated: "increment",
    },
    nome: {
      type: "text",
      nullable: true,
    },
    descricao: {
      type: "text",
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
export default Categoria;
