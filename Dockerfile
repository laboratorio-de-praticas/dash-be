FROM node:22.14.0-alpine3.21

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json para dentro do container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o restante dos arquivos para dentro do container
COPY . .

# Define a variável de ambiente PORT com valor padrão 5000
ENV PORT=5000

# Expõe a porta definida pela variável de ambiente
EXPOSE ${PORT}

# Comando para iniciar a aplicação
CMD ["npm", "start"]
