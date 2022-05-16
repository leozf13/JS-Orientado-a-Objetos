import User from "./User.js"; // Não esquecer do '.js' ao final do código

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "Docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `${estudante} aprovado no curso: ${curso}`
    }

    exibirInfos() { //Polimorfismo: Usando um mesmo método com uma lógica diferente (regras)
        return `
        Nome: ${this.nome} 
        Cargo: ${this.role}
        `
    }
}

