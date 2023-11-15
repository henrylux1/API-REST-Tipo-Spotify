//importar dependencias
const express = require("express");

//cargar router
const router = express.Router();

//importar controlador
const AlbumControllers = require("../controllers/album");

//definir rutas
router.get("/prueba", AlbumControllers.prueba)

//exportar router
module.exports = router;