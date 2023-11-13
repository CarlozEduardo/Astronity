CREATE DATABASE astronity;

USE astronity;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(50),
telefone CHAR(20),
dtNasc DATE);

CREATE TABLE postagem (
idPost INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR (50),
descricao VARCHAR(200),
fkUsuario INT,
CONSTRAINT fkPost FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario));

CREATE TABLE comentario (
idComentario INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(100),
fkUsuario INT,
fkPost INT,
CONSTRAINT fkPerfil FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario),
CONSTRAINT fkComentario FOREIGN KEY (fkPost)
REFERENCES postagem(idPost));

SELECT * FROM usuario;

INSERT INTO usuario (nome, email, senha, telefone, dtNasc) VALUES
 ('teste', 'abc@teste.com', 'senha123', '12345678900', '2004-10-31');