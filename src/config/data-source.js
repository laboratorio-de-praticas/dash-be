import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv";

dotenv.config();

// Configuração do Banco de Dados
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ["src/models/*.js"],
    migrations: [],
    subscribers: [],
})
