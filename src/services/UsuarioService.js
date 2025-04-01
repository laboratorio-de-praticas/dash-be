import { AppDataSource } from "../config/data-source.js";
const repository = AppDataSource.getRepository("Usuario");

class UsuarioService {
  async findAll() {
    console.log(`Buscando Todos os usuarios...`);
    try {
      const usuarios = await repository.find();
      console.log(`Fim da Busca de Usuarios...`);
      return usuarios;
    } catch (error) {
      console.log(`Erro ao buscar Usuarios: ${error}`);
      throw error;
    }
  }

  
}

export default new UsuarioService();
