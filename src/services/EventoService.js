import { AppDataSource } from "../config/data-source.js";
const repository = AppDataSource.getRepository("Evento");

class EventoService {
  constructor() {
    this.listenerClient = null;
    this.initListenerNewVotes();
  }

  async findAll() {
    console.log(`Buscando Todos os Eventos...`);
      try {
        const eventos = await repository.find();
      console.log(`Fim da Busca de Eventos...`);
      return eventos;
    } catch (error) {
      console.log(`Erro ao buscar Eventos: ${error}`);
      throw error;
    }
  }

  // Funções para webhook
  async sendWebhook (url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      console.log("Dados de novo voto enviado com sucesso!");

      return await response.json(); 
    } catch (error) {
      console.error('Erro ao enviar dados para o Webhook:', error.message);
    }
  }

  async initListenerNewVotes() {
    const urls = {
      Externo: "http://localhost:4000/votacao_projetos",
      Interno: "http://localhost:4000/votacao_representantes",
    };

    try {
      const driver = AppDataSource.driver;
      const pgClient = driver.postgres.Client;

      // Cria um novo client para receber os dados do trigger
      this.listenerClient = new pgClient({
        host: AppDataSource.options.host,
        port: AppDataSource.options.port,
        user: AppDataSource.options.username,
        password: AppDataSource.options.password,
        database: AppDataSource.options.database
      });
      
      await this.listenerClient.connect();
      await this.listenerClient.query("LISTEN new_vote");
      console.log("Escutando votos...");

      this.listenerClient.on('notification', async (msg) => {
        try {
          const payload = JSON.parse(msg.payload);

          if (!payload.tipoevento) {
            console.log('Tipo de evento não especificado');
            return;
          }

          const url = urls[payload.tipoevento];
          if (!url) {
            console.log('Evento desconhecido:', payload.tipoevento);
            return;
          }

          await this.sendWebhook(url, payload);
          
        } catch (error) {
          console.error("Erro no processamento:", error.message);
        }
      });

      this.listenerClient.on('error', (err) => {
        console.error('Erro na conexão:', err.message);
        this.reconnectListener();
      });

    } catch (error) {
      console.error('Erro ao iniciar listener:', error.message);
      setTimeout(() => this.initListenerNewVotes(), 5000);
    }
  } 

  async reconnectListener() {
    if (this.listenerClient) {
      try {
        await this.listenerClient.end();
      } catch (e) {
        console.error('Erro ao encerrar conexão:', e.message);
      }
    }
    setTimeout(() => this.initListenerNewVotes(), 5000); // A função tenta iniciar o listener novamente em caso de erro
  }
}

export default new EventoService();
