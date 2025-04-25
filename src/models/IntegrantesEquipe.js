import {EntitySchema} from 'typeorm';

const IntegrantesEquipe = new EntitySchema({
  name: 'IntegrantesEquipe',
  tableName: 'IntegrantesEquipe',
  columns: {
    id_integrante: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    projeto_id: {
      type: 'int',
      nullable: false,
    },
    aluno_id: {
      type: 'int',
      nullable: false,
    },
  },
});
export default IntegrantesEquipe;
