import {EntitySchema} from 'typeorm';

const Participante = new EntitySchema({
  name: 'Participante',
  tableName: 'Participante',
  columns: {
    id_participante: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    id_aluno: {
      type: 'int',
      nullable: true,
    },
    id_visitante: {
      type: 'int',
      nullable: true,
    },
    id_evento: {
      type: 'int',
      nullable: false,
    },
    avaliador: {
      type: 'boolean',
      default: false,
    },
  },
});

export default Participante;
