import {EntitySchema} from 'typeorm';

const ProjetoLinhaExtensao = new EntitySchema({
  name: 'ProjetoLinhaExtensao',
  tableName: 'ProjetoLinhaExtensao',
  columns: {
    projeto_id: {
      type: 'int',
      primary: true,
    },
    linha_extensao_id: {
      type: 'int',
      primary: true,
    },
  },
});
export default ProjetoLinhaExtensao;
