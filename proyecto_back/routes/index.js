var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.send("prueba Clientes Power son motor de vista");
});

module.exports = router;
