var rankModel = require("../models/rankModel");

function registrarPartida(req, res) {
  var points = req.body.pointsServer;
  var partida = req.body.partidaServer;
  var idUsuario = req.body.usuarioServer;
  // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
  rankModel
    .registrarPartida(points, partida, idUsuario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  registrarPartida,
};
