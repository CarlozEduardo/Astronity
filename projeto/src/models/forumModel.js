var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT 
            p.idPost AS idPost,
            p.titulo,
            p.descricao,
            p.fkUsuario,
            u.idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM postagem p
            INNER JOIN usuario u
                ON p.fkusuario = u.idUsuario ORDER BY p.idPost DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function pesquisarDescricao(texto) {
  console.log(
    "ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()"
  );
  var instrucao = `
        SELECT 
            a.id AS idPost,
            a.titulo,
            a.descricao,
            a.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM postagem a
            INNER JOIN usuario u
                ON a.fkUsuario = u.idUsuario
        WHERE a.descricao LIKE '${texto}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarPorUsuario(idUsuario) {
  console.log(
    "ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()"
  );
  var instrucao = `
        SELECT 
            a.id AS idPost,
            a.titulo,
            a.descricao,
            a.fkUsuario,
            u.idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM postagem a
            INNER JOIN usuario u
                ON a.fkUsuario = u.idUsuario
        WHERE u.idUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function publicar(titulo, descricao, idUsuario) {
  console.log(
    "ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ",
    titulo,
    descricao,
    idUsuario
  );
  var instrucao = `
        INSERT INTO postagem (titulo, descricao, fkUsuario) VALUES ('${titulo}', '${descricao}', ${idUsuario});
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function editar(novaDescricao, idPost) {
  console.log(
    "ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ",
    novaDescricao,
    idPost
  );
  var instrucao = `
        UPDATE postagem SET descricao = '${novaDescricao}' WHERE id = ${idPost};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function deletar(idPost) {
  console.log(
    "ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():",
    idPost
  );
  var instrucao = `
        DELETE FROM postagem WHERE idPost = ${idPost};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listar,
  listarPorUsuario,
  pesquisarDescricao,
  publicar,
  editar,
  deletar,
};
