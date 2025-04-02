FROM node:22.14.0-alpine3.21

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json para dentro do container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o restante dos arquivos para dentro do container
COPY . .

# Expõe a porta definida pela variável de ambiente
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
