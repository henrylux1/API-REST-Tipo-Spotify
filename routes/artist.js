//importar dependencias
const express = require("express");

//cargar router
const router = express.Router();

//importar controlador
const ArtistControllers = require("../controllers/artist");

//definir rutas
router.get("/prueba", ArtistControllers.prueba)

//exportar router
module.exports = router;