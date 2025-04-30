import {AppDataSource} from './src/config/data-source.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Configuração do CORS
const allowedOrigins = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};


//Routes
import DashboardInternaRoutes from './src/routes/DashBoardInternaRoutes.js';
import DashboardExternaRoutes from './src/routes/DashBoardExternaRoutes.js';
import ListenerRoutes from './src/routes/ListenerRoutes.js';
import VotosInternosRoutes from './src/routes/VotosInternosRoutes.js';
import EventosRoutes from './src/routes/EventoRoutes.js';
//Middleware
import errorHandler from './src/middlewares/errorHandler.js';
/* Variáveis de Ambiente */
dotenv.config();

//Configuração Express
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Importando Rotas
app.use('/', DashboardInternaRoutes);
app.use('/', DashboardExternaRoutes);
app.use('/', ListenerRoutes);
app.use('/', VotosInternosRoutes);
app.use('/', EventosRoutes);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
//Manter Middlewares no final da definição das rotas
// Middleware para tratamento de erros
app.use(errorHandler);

app.use(cors(corsOptions));
const PORT = process.env.PORT;

// Estabelecer Conexão com o banco de dados
AppDataSource.initialize()
  .then(async () => {
    console.log('Banco de dados conectado!');

    // Iniciando Serviço na porta definida
    app.listen(PORT, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Servidor rodando na porta ${PORT}`);
      }
    });
  })
  .catch((error) => console.log(error));
