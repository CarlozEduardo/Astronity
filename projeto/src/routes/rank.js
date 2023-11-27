var express = require("express");
var router = express.Router();

var rankController = require("../controllers/rankController");

router.post("/registrarPartida", function (req, res) {
  rankController.registrarPartida(req, res);
});

module.exports = router;
