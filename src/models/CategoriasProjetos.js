import {EntitySchema} from 'typeorm';

const CategoriasProjetos = new EntitySchema({
  name: "CategoriaProjeto",
  tableName: "CategoriasProjetos",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: "increment",
    },
    data_criacao: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    data_altercao: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    fk_id_projeto: {
      type: 'int',
      nullable: false,
    },
    fk_id_categoria: {
      type: 'int',
      nullable: false,
    },
  },
  uniques: [
    {
      columns: ["fk_id_projeto", "fk_id_categoria"],
    },
  ],
});
export default CategoriasProjetos;
