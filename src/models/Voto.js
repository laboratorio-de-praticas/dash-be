import {EntitySchema} from 'typeorm';

const Voto = new EntitySchema({
  name: 'Voto',
  tableName: 'Voto',
  columns: {
    id_voto: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    id_candidato: {
      type: 'int',
      nullable: false,
    },
    id_participante: {
      type: 'int',
      nullable: false,
    },
    id_evento: {
      type: 'int',
      nullable: false,
    },
  },
});

export default Voto;
