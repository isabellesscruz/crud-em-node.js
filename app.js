let express = require("express");
let app = express();
app.use(express.json());
app.set("engine ejs", "ejs");
const controle = require("./controller/controle.js");
const Pessoa = require("./model/Pessoa.js");

app.get("/", async function (req, res) {
  let colecao = new Array();
  colecao = await controle.mostraPessoa();
  res.render("index.ejs", { dados: colecao });
});

app.get("/inserir", function (req, res) {
  res.render("inserir.ejs", { colecao: {} });
});

app.post("/inserir", function (req, res) {
  console.log(req.body);
  const pessoa = new Pessoa(
    0,
    req.body.nome,
    req.body.endereco,
    req.body.datanascimento
  );
  controle.inserePessoa(pessoa);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("SERVIDOR ATIVO, ACESSE http://localhost:3000");
});
