-- Enums
CREATE TYPE "UsuarioTipos" AS ENUM ('Admin', 'Atendente');
CREATE TYPE "EventoTipos" AS ENUM ('Externo', 'Interno');
CREATE TYPE "EventoStatus" AS ENUM ('Ativo', 'Em_Preparo', 'Em_Contagem', 'Finalizado');
CREATE TYPE "CandidatoSituacao" AS ENUM ('Pendente', 'Ativo', 'Encerrado');
CREATE TYPE "UsuarioStatus" AS ENUM ('Pendente', 'Ativo', 'Desligado');

-- Tabelas
CREATE TABLE "Usuario" (
  id SERIAL PRIMARY KEY,
  nome TEXT,
  senha TEXT,
  email_institucional TEXT,
  tipo_usuario "UsuarioTipos" NOT NULL,
  status_usuario "UsuarioStatus" NOT NULL,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Projeto" (
  id_projeto SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT NOT NULL,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "FotoProjeto" (
  id_foto_projeto SERIAL PRIMARY KEY,
  foto_url TEXT,
  foto_extensao TEXT,
  fk_id_projeto INT NOT NULL REFERENCES "Projeto"(id_projeto),
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Categoria" (
  id_categoria SERIAL PRIMARY KEY,
  nome TEXT,
  descricao TEXT,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "CategoriasProjeto" (
  id SERIAL PRIMARY KEY,
  fk_id_projeto INT NOT NULL REFERENCES "Projeto"(id_projeto),
  fk_id_categoria INT NOT NULL REFERENCES "Categoria"(id_categoria),
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now(),
  UNIQUE(fk_id_projeto, fk_id_categoria)
);

CREATE TABLE "Aluno" (
  id_aluno SERIAL PRIMARY KEY,
  foto_url TEXT,
  data_ingresso TIMESTAMP,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now(),
  curso_semestre TEXT,
  fk_id_usuario INT NOT NULL REFERENCES "Usuario"(id)
);

CREATE TABLE "Visitante" (
  id_visitante SERIAL PRIMARY KEY,
  nome_social TEXT,
  celular TEXT,
  data_nascimento TIMESTAMP,
  chave_acesso CHAR(4)
);

CREATE TABLE "Evento" (
  id_evento SERIAL PRIMARY KEY,
  tipo_evento "EventoTipos" NOT NULL,
  nome_evento TEXT,
  descricao_evento TEXT,
  status_evento "EventoStatus" NOT NULL,
  curso_semestre TEXT,
  data_inicio TIMESTAMP,
  data_fim TIMESTAMP,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Candidato" (
  id SERIAL PRIMARY KEY,
  id_aluno INT NOT NULL REFERENCES "Aluno"(id_aluno),
  id_projeto INT NOT NULL REFERENCES "Projeto"(id_projeto),
  id_evento INT NOT NULL REFERENCES "Evento"(id_evento),
  qrcode TEXT,
  situacao_candidato "CandidatoSituacao" NOT NULL,
  data_criacao TIMESTAMP DEFAULT now(),
  data_alteracao TIMESTAMP DEFAULT now()
);

CREATE TABLE "Participante" (
  id_participante SERIAL PRIMARY KEY,
  id_aluno INT REFERENCES "Aluno"(id_aluno),
  id_visitante INT REFERENCES "Visitante"(id_visitante),
  id_evento INT NOT NULL REFERENCES "Evento"(id_evento),
  avaliador BOOLEAN DEFAULT false
);

CREATE TABLE "Voto" (
  id_voto SERIAL PRIMARY KEY,
  id_candidato INT NOT NULL REFERENCES "Candidato"(id),
  id_participante INT NOT NULL REFERENCES "Participante"(id_participante),
  id_evento INT NOT NULL REFERENCES "Evento"(id_evento),
  UNIQUE(id_participante, id_candidato)
);

CREATE TABLE "Classificacao" (
  id_classificacao SERIAL PRIMARY KEY,
  id_participante INT NOT NULL REFERENCES "Participante"(id_participante),
  id_projeto INT NOT NULL REFERENCES "Projeto"(id_projeto),
  estrelas INT NOT NULL,
  data_criacao TIMESTAMP DEFAULT now(),
  CONSTRAINT id_participante_id_projeto UNIQUE (id_participante, id_projeto)
);
