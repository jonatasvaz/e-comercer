
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const Cadastro = require("./route/cadastro")


app.use(bodyParse.json());
app.use(bodyParser.urlencoded({ extended: true }));
var cors = require('cors')
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(cors())


app.use(Cadastro)


 

app.get("/", async (req, res) => {
  //const users = await Cadastro.findAll();
  //res.send(users);
});



app.listen(3000, () => {
  console.log(`running at port 3000`);
});
