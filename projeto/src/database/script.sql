CREATE DATABASE astronity;
USE astronity;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(50),
telefone CHAR(20),
dtNasc DATE);

CREATE TABLE jogo (
idPartida INT PRIMARY KEY AUTO_INCREMENT,
ponto INT,
partida INT,
fkUsuario INT,
CONSTRAINT fkPost FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario));

CREATE TABLE avaliacao (
    idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    nota DECIMAL(2,1),
    descricao VARCHAR(255),
    fkUsuario INT,
    CONSTRAINT fkUsuarioAvaliacao FOREIGN KEY (fkUsuario)
    REFERENCES usuario(idUsuario)
);

CREATE TABLE ocupacao (
    idOcupacao INT,
    ocupacao VARCHAR(20),
    instituicao VARCHAR(50),
    fkUsuario INT,
    PRIMARY KEY(fkUsuario, idOcupacao)
);

SELECT * FROM usuario;