const Pessoa = require("../model/Pessoa.js");
var db = require("./db.js");
var pessoa;
async function mostraPessoa() {
  let listaPessoa = [];
  return new Promise((registros, reject) => {
    db.query(
      "SELECT matricula, nome, endereco, datanascimento FROM Pessoa",
      async function (error, colecao) {
        for (const item of colecao) {
          pessoa = new Pessoa();
          pessoa.setMatricula(item.matricula);
          pessoa.setNome(item.nome);
          pessoa.setEndereco(item.endereco);
          console.log(item);
          pessoa.setDatanascimento(item.datanascimento);
          listaPessoa.push(pessoa);
        }
        registros(listaPessoa);
      }
    );
  });
}

const Professor = require("../model/Professor.js");
var db = require("./db.js");
var professor;
async function mostraProfessor() {
  let listaProfessor = [];
  return new Promise((registros, reject) => {
    db.query(
      "SELECT * FROM professor, pessoa where matricula_pro=FK_pessoa ORDER BY matricula_pro desc",
      async function (error, colecao) {
        for (const item of colecao) {
          professor = new Professor();
          professor.setID(item.id_professor);
          professor.setFormacao(item.formacao);
          professor.setSalario(item.salario);
          console.log(item);
          professor.setMatricula_pro(item.matricula_pro);
          listaProfessor.push(professor);
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
