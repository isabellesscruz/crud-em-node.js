class Professor {
  id_professor = 0;
  formacao = "";
  salario = 0.0;
  matricula_pro = 0;

  constructor(id_professor, formacao, salario, matricula_pro) {
    this.id_professor = id_professor;
    this.formacao = formacao;
    this.salario = salario;
    this.matricula_pro = matricula_pro;
  }

  getID() {
    return this.id_professor;
  }
  setID(value) {
    this.id_professor = value;
  }
  getFormacao() {
    return this.formacao;
  }
  setFormacao(value) {
    this.formacao = value;
  }
  getSalario() {
    return this.salario;
  }
  setSalario(value) {
    this.salario = value;
  }
  getMatricula_pro() {
    return this.matricula_pro;
  }
  setMatricula_pro(value) {
    this.matricula_pro = value;
  }
}
module.exports = Professor;
