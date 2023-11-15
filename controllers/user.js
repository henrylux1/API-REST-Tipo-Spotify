//accion de prueba
const prueba = (req, res) => {

    return res.status(200).send({
        status: "success",
        message: "Mensaje enviado desde: controllers/user.js"
    });
}

//registro
const register = (req, res) => {

    //recoger los datos de la peticion
    let params = req.body;
    console.log(params)

    //comprobar que lleguen bien
    if(!params.name || !params.nick || !params.email || !params.password){

        return res.status(400).send({
            status: "error",
            message: "Faltan datos por enviar"
        })
    }

    //validar los datos 

    //control de usuarios duplicados

    //cifrar la contraseña 

    //crear objeto de usuario

    //guardar usuario en la base de datos

    //limpiar el objeto a devolver

    //devolver un resultado

    return res.status(200).send({
        status: "success",
        message: "Metodo de registro"
    });
}

//exportar acciones
module.exports = {
    prueba,
    register
}