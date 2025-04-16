import { EntitySchema } from "typeorm";

const Avaliacoes = new EntitySchema({
  name: "Avaliacoes",
  tableName: "Avaliacoes",
  columns: {
    id_avaliacao: {
      type: "int",
      primary: true,
      generated: "increment",
    },
    fk_id_avaliador: {
      type: "int",
      nullable: false,
    },
    fk_id_projeto: {
      type: "int",
      nullable: false,
    },
    estrelas_inovador: {
      type: "int",
      nullable: false,
    },
    estrelas_acolhedor: {
      type: "int",
      nullable: false,
    },
    comentario: {
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
export default Avaliacoes;
