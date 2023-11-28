var database = require("../database/config");

function registrarPartida(points, partida, idUsuario) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarPartida():"
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
          INSERT INTO jogo (ponto, partida, fkUsuario) VALUES (${points}, ${partida}, ${idUsuario});
      `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listar() {
  console.log(
    "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = ` 
  SELECT SUM(j.ponto) total_pontos, SUM(j.partida) total_partidas, u.idUsuario, u.nome
  FROM jogo j
  INNER JOIN usuario u ON j.fkUsuario = u.idUsuario
  GROUP BY u.idUsuario
  ORDER BY total_pontos DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  registrarPartida,
  listar,
};
