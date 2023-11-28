-- DATABASE
CREATE DATABASE astronity;
USE astronity;

-- TABLES
CREATE TABLE ocupacao (
idOcupacao INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(30));

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(50),
senha VARCHAR(50),
dtNasc DATE,
ocupacao INT,
FOREIGN KEY (ocupacao) REFERENCES ocupacao(idOcupacao));

CREATE TABLE jogo (
idPartida INT PRIMARY KEY AUTO_INCREMENT,
ponto INT,
partida INT,
fkUsuario INT,
CONSTRAINT fkPost FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario));

CREATE TABLE avaliacao (
    fkUsuario INT PRIMARY KEY,
    nota DECIMAL(2,1),
    descricao VARCHAR(255),
    CONSTRAINT fkUsuarioAvaliacao FOREIGN KEY (fkUsuario)
    REFERENCES usuario(idUsuario)
);

-- INSERT's

INSERT INTO ocupacao(nome) VALUES
('Professor'),
('Estudante'),
('Fã');

-- SELECT's

SELECT * FROM usuario;
SELECT * FROM jogo;
SELECT * FROM avaliacao;

SELECT SUM(j.ponto) total_pontos, SUM(j.partida) total_partidas, u.idUsuario, u.nome
FROM jogo j
INNER JOIN usuario u ON j.fkUsuario = u.idUsuario
GROUP BY u.idUsuario
ORDER BY total_pontos DESC;