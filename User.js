//Classes

export default class User { //ESM

    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "Estudante"; //Se vier vazio inicia como Estudante
        this.#ativo = ativo;
    }

    get nome() { // gets funções de apenas leitura 
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if(novoNome === '') {
            throw new Error("Formato inválido!");
        }else {
            this.#nome = novoNome;    
        }
        
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    set nascimento(novoNascimento) {
        this.#nascimento = novoNascimento;
    }

    set role(novoRole) {
        this.#role = novoRole;
    }

    set ativo(novoAtivo) {
        this.#ativo = novoAtivo;
    }

    exibirInfos() {
        return `
        Nome: ${this.nome} 
        Email: ${this.email}
        Nascimento: ${this.nascimento}
        Cargo: ${this.role}
        Ativo? : ${this.ativo}`; // chamando métodos get para imprimir valores
    }
}

// const novoUser = new User("Leo", "leo@outlook.com", "13/05/1993");
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser)); // Retorna true pois novoUser é um protótipo de User








