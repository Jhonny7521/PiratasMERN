const express = require("express");
const app = express();
const cors = require("cors");

//Para usa json y obtener datos de url
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permiten accesar desde un origen distinto
app.use(
  cors({
    //URL de frontend
    origin: "http://localhost:3000"  //puerto correspondiente de aplicacion react
  })
)

//Inicializa BD
require("./config/mongoose.config")

//Importar rutas
// const misRutas = require("./server/routes/pirata.routes")
const misRutas = require("./routes/pirata.routes")
misRutas(app);

//Ejecutamos server
app.listen(8000, () => console.log("Server listo"));