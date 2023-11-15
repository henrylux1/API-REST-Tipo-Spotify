//importar dependencias
const express = require("express");

//cargar router
const router = express.Router();

//importar controlador
const UserControllers = require("../controllers/user");

//definir rutas
router.get("/prueba", UserControllers.prueba)
router.post("/register", UserControllers.register);

//exportar router
module.exports = router;