var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
  //methodOverride = require("method-override");
//mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(methodOverride());

var route = express.Router();

// router.get("/", function (req, res) {
//   res.send("Conectado Exitosamente");
//   console.log(req.body);
//   console.log("Alguien se conecto");
// });


route.get('/on', (req, res) => {
  res.status(200).send('El actualizador OTA se ha activado exitosamente');
  console.log("Cliente conectado");
  console.log(req.body);
});
route.get('/off', (req, res) => {
  res.status(200).send('El actualizador OTA se ha desactivado exitosamente');
  console.log("Cliente conectado 2");
  console.log(req.body);
});
route.post('/archivo', (req, res) => {
  res.status(200).send('archivo actualizado');
  console.log("Cliente conectado 3");
  //console.log(req.body.name);
  console.log(req.body.sendName);
  //console.log(req.body.Name);
});
route.post('/examinar', (req, res) => {
  res.status(200).send('archivo actualizado');
  console.log("Cliente conectado 3");
  //console.log(req.body.name);
  console.log(req.body.name);
});
app.use(route);

app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});
