//Objetos Literais

const user = {
    nome : "Leonardo",
    email : "leonardo.zfacini@gmail.com",
    nascimento : "25/04/2022",
    cargo : "estudante",
    ativo : true,
    exibirInfos : function() {
        console.log(this.nome, ",", this.cargo)
    }
};

const admin = {
    nome : "Mariana",
    email : "m@m.com",
    cargo : "admin",
    criarCurso : function() {
        console.log("Curso criado!!!");
    }
};


Object.setPrototypeOf(admin, user); // 1º parametro objeto que vai herdar propriedades, 2º parametro da onde vai herdar

admin.criarCurso();

admin.exibirInfos();



// //console.table(user);

// //user.exibirInfos();

// const exibir = function() { 
//     console.log(this.nome); //vai retornar undefined pois o this nesta função está sem contexto de nenhum objeto
// }

// exibir(); //undefined

// //Funções em javaScript são valores e podem ser armazenadas em outras variáveis

// const exibeCorretamente = exibir.bind(user); //ExibeCorretamente está recebendo a função exibir no contexto do objeto 'user' com o método 'bind'

// //ExibirCorretamente é uma cópia, uma 'nova' função

// exibeCorretamente(); //Leonardo

// exibir.call(user); // Leonardo \\ Executa a função exibir com o contexto de user sem precisar criar uma variável 'cópia'

// exibir.call('Xande'); // Xande