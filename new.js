//Utilizando 'new'

// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exibeInfos = function() {

//         return `${this.nome}, ${this.email}`;
//     }
// }

// const newUser = new User("Leonardo", "leonardo.zfacini@gmail.com");

// console.log(newUser.exibeInfos());

// function Admin(cargo, nome, email) {
//     User.call(this, nome, email); // this se refere ao contexto de User, chamado por call
//     this.cargo = cargo || "Estudante"; // Passa o parametro ou caso esteja vazio passa Estudante
// }

// Admin.prototype = Object.create(User.prototype); // Estou criando um Objeto Admin a partir do protótipo do Objeto User
// const novoUser = new Admin("Admin", "João Fogo", "jf@gmail.com");

// console.log(novoUser.exibeInfos());
// console.log(novoUser.cargo);


const user = {

    init : function (nome, email) { //Função construtora
        this.nome = nome;
        this.email = email;
    },

    exibirInfos : function() {

        return this.nome;
    }
}

const novoUser = Object.create(user); //Utilizando um objeto literal como protótipo
novoUser.init("Leo", "leozequim@hotmail.com")
console.log(novoUser.exibirInfos());

console.log(user.isPrototypeOf(novoUser)); // verifica se User é um protótipo de novoUser. R: true
