import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "Admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return (`Curso de: ${nomeDoCurso} criado com ${vagas} vagas`);
    }

}

