class Pessoa {
    matricula = 0;
    nome = '';
    endereco = '';
    datanascimento = '';
    
    constructor(matricula, nome, endereco,
    datanascimento) {
        this.matricula = matricula;
        this.nome = nome;
        this.endereco = endereco;
        this.datanascimento = datanascimento; 
    }
    
    getMatricula() {
        return this.matricula; 
    }
    setMatricula(value) {
        this.matricula = value; 
    }
    getNome() {
        return this.nome; 
    }
    setNome(value) {
        this.nome = value; 
    }
    getEndereco() {
        return this.endereco; 
    }
    setEndereco(value) {
        this.endereco = value; 
    }
    getDatanascimento() {
        console.log(this.datanascimento);
        return this.datanascimento; 
    }
    setDatanascimento(value) {
        const date = new Date(value)
        const day = date.getDay()
        const month = date.getMonth() + 1;
        const year = date.getFullYear()
        const fulldate = `${day}/${month}/${year}` 
        this.datanascimento = fulldate; 
    }
}
module.exports = Pessoa;

