var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

router.get("/listar", function (req, res) {
  forumController.listar(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
  forumController.publicar(req, res);
});

router.get("/ultimas", function (req, res) {
  forumController.buscarUltimasMedidas(req, res);
});

module.exports = router;
