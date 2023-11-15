//importar dependencias
const express = require("express");

//cargar router
const router = express.Router();

//importar controlador
const SongControllers = require("../controllers/song");

//definir rutas
router.get("/prueba", SongControllers.prueba)

//exportar router
module.exports = router;