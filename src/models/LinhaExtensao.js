import {EntitySchema} from 'typeorm';
const LinhaExtensao = new EntitySchema({
  name: 'LinhaExtensao',
  tableName: 'LinhaExtensao',
  columns: {
    id_linha: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    descricao: {
      type: 'text',
      nullable: false,
    },
  },
});
export default LinhaExtensao;
