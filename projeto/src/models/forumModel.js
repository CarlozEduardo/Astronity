var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT 
            a.idAvaliacao,
            a.nota,
            a.descricao,
            a.fkUsuario,
            u.idUsuario,
            u.nome
        FROM avaliacao a
            INNER JOIN usuario u
                ON a.fkUsuario = u.idUsuario ORDER BY a.idAvaliacao DESC;
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

module.exports = {
  listar,
  publicar,
};
