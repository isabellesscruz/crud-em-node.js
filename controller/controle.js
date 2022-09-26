const Pessoa = require("../model/Pessoa.js");
var db = require("./db.js");
var pessoa;
async function mostraPessoa() {
  let listaPessoa = new Array();
  return new Promise((registros, reject) => {
    db.query(
      "SELECT matricula, nome, endereco, datanascimento FROM Pessoa",
      async function (error, colecao) {
        for (const item of colecao) {
          pessoa = new Pessoa();
          pessoa.setMatricula(item.matricula);
          pessoa.setNome(item.nome);
          pessoa.setEndereco(item.endereco);
          pessoa.setDatanascimento(item.datanascimento);
          listaPessoa.push(pessoa);
        }
        registros(listaPessoa);
      }
    );
  });
}

function inserePessoa(pessoa) {
  const params = [
    pessoa.getNome(),
    pessoa.getEndereco(),
    pessoa.getDatanascimento(),
  ];
  let sql =
    "INSERT INTO bd_faculdade.pessoa (nome, endereco, datanascimento) VALUES (?,?,?)";
  db.query(sql, params, function (err) {});
}

function removePessoa(matricula) {
  let sql = "DELETE FROM bd_faculdade.pessoa where matricula=?";
  db.query(sql, [matricula], function (err) {});
}

function editaPessoa(pessoa) {
  const params = [
    pessoa.getNome(),
    pessoa.getEndereco(),
    pessoa.getDatanascimento(),
    pessoa.getMatricula(),
  ];
  let sql =
    "UPDATE bd_faculdade.pessoa SET nome=?, endereco=?, datanascimento=? WHERE matricula =?";
  db.query(sql, params, function (err) {});
}
module.exports = {
  mostraPessoa: mostraPessoa,
  inserePessoa: inserePessoa,
  removePessoa: removePessoa,
  editaPessoa: editaPessoa,
};
