var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT
            a.nota,
            a.descricao,
            a.fkUsuario,
            u.idUsuario,
            u.nome
        FROM avaliacao a
            INNER JOIN usuario u
                ON a.fkUsuario = u.idUsuario ORDER BY a.nota DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function publicar(nota, descricao, idUsuario) {
  console.log(
    "ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ",
    nota,
    descricao,
    idUsuario
  );
  var instrucao = `
        INSERT INTO avaliacao (nota, descricao, fkUsuario) VALUES (${nota}, '${descricao}', ${idUsuario});
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function buscarUltimasMedidas() {
  var instrucaoSql = `
  SELECT o.nome, COUNT(u.ocupacao) AS ocupacoes 
  FROM ocupacao as o JOIN usuario as u 
  ON ocupacao = idOcupacao GROUP BY idOcupacao`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  listar,
  publicar,
  buscarUltimasMedidas,
};
