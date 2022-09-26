let express = require("express");
let app = express();
app.use(express.urlencoded({ extended: true }));
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

app.post("/inserir", async function (req, res) {
  const pessoa = new Pessoa(
    0,
    req.body.nome,
    req.body.endereco,
    req.body.datanascimento
  );
  controle.inserePessoa(pessoa);
  res.redirect("/");
});
app.get("/delete/:matricula", function (req, res) {
  controle.removePessoa(req.params.matricula);
  res.redirect("/");
});

app.get("/editar/:matricula", function (req, res) {
  res.render("inserir.ejs", { colecao: {} });
});
app.post("/editar/:matricula", async function (req, res) {
  const pessoa = new Pessoa(
    req.params.matricula,
    req.body.nome,
    req.body.endereco,
    req.body.datanascimento
  );
  console.log(req.params);
  controle.editaPessoa(pessoa);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("SERVIDOR ATIVO, ACESSE http://localhost:3000");
});
