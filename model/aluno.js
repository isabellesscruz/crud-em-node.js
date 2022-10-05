class Aluno {
  id_aluno = 0;
  curso = "";
  matricula_alu = 0;
  turma_id = 0;
  matricula = 0;

  constructor(id_aluno, curso, matricula_alu, turma_id, matricula) {
    this.id_aluno = id_aluno;
    this.curso = curso;
    this.matricula_alu = matricula_alu;
    this.turma_id = turma_id;
    this.matricula = matricula;
  }
  getIdAluno() {
    return this.id_aluno;
  }
  setIdAluno(value) {
    this.id_aluno = value;
  }
  getCurso() {
    return this.curso;
  }
  setCurso(value) {
    this.curso = value;
  }
  getMatriculaAluno() {
    return this.matricula_alu;
  }
  setMatriculaAluno(value) {
    this.matricula_alu = value;
  }
  getTurmaId() {
    return this.turma_id;
  }
  setTurmaId(value) {
    this.turma_id = value;
  }
  getMatricula() {
    return this.matricula;
  }
  setMatricula(value) {
    this.matricula = value;
  }
}
module.exports = Aluno;
