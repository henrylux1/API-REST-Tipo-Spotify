require('dotenv').config();

//importar conexion a base de datos
const connection = require("./database/connection");

//importar dependecias
const express = require("express");
const cors = require("cors");

//mensaje de bienvenida
console.log("API REST con node para la app de musica arrancada!!");

//ejecutar conexxion a base de datos
connection();

//crear servidor de node
const app = express();
const port = 3910;

//configurar el cors
app.use(cors());

//convertir los datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//cargar configuracion de rutas
const UserRoutes = require("./routes/user");
const ArtistRoutes = require("./routes/artist");
const AlbumRoutes = require("./routes/album");
const SongRoutes = require("./routes/song");

app.use("/api/user", UserRoutes);
app.use("/api/artist", ArtistRoutes);
app.use("/api/album", AlbumRoutes);
app.use("/api/song", SongRoutes);

//ruta de pruebas
app.get("/ruta-probando", (req, res) => {
    return res.status(200).send({
        "id": 12,
        "nombre": "Henry",
        "apellido": "Ordoñez"
    });
});

//poner el servidor a escuchar peticiones http
app.listen(port, () => {
    console.log("Servidor de node esta escuchando en el puerto: ", port);
})