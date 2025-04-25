import {EntitySchema} from 'typeorm';
const ImagensProjeto = new EntitySchema({
  name: 'ImagensProjeto',
  tableName: 'ImagensProjeto',
  columns: {
    id_imagem: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    projeto_id: {
      type: 'int',
      nullable: false,
    },
    imagem_url: {
      type: 'text',
      nullable: false,
    },
  },
});
export default ImagensProjeto;
