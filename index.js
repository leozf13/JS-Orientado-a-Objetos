import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User("Leopardao", "leonardozequim@hotmail.com", "13/05/1993", "Admin");

// console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin("Paloma", "paloma@hotmail.com", "17/09/1997", "Docente");

// console.log(novoAdmin.exibirInfos());

// console.log(novoAdmin.nome) // chamna como um propriedade, sem parenteses

// novoAdmin.nome = "";

// console.log(novoAdmin.exibirInfos());

// novoAdmin.email = "andreia@yahoo.com.br"

// console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente("Ted", "tedlokao@outlook.com", "10/03/2016");

console.log(novoDocente.exibirInfos())




