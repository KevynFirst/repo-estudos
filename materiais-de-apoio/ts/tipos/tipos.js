"use strict";
//string
let nome = 'João';
console.log(nome);
console.log("----------");
//numbers
let idade = 27;
idade = 27.5;
console.log(idade);
console.log("----------");
//boolean
let possuiHobbies = false;
console.log(possuiHobbies);
console.log("----------");
//tipos explicitos
let minhaidade;
minhaidade = 27;
console.log(typeof minhaidade);
minhaidade = "minha idade é 27";
console.log(typeof minhaidade);
console.log("----------");
//array
let hobbies = ["Cozinhar", "Esportes"];
console.log(hobbies);
console.log(hobbies[0]);
console.log(typeof hobbies);
console.log("------------------------------");
//tupla
let endereco = ["Av Principal", 99];
console.log(endereco);
console.log(endereco[0] + " - tipo " + typeof endereco[0]);
console.log(endereco[1] + " - tipo " + typeof endereco[1]);
console.log("------------------------------");
//enums
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 1] = "verde";
    Cor[Cor["azul"] = 2] = "azul";
    Cor[Cor["laranja"] = 100] = "laranja";
    Cor[Cor["amarelo"] = 101] = "amarelo";
    Cor[Cor["vermelho"] = 100] = "vermelho";
    Cor[Cor["preto"] = 101] = "preto";
})(Cor || (Cor = {}));
let minhaCor = Cor.verde;
console.log("minha cor tem valor = " + minhaCor);
console.log(Cor);
console.log("------------------------------");
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
console.log("------------------------------");
//funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi do vazio!');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 4));
console.log("------------------------------");
//tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
console.log("------------------------------");
//Objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
console.log("------------------------------");
//union types
let nota;
nota = '10';
console.log(`Minha nota é ${nota}`);
nota = 10;
console.log(`Minha nota é ${nota}`);
console.log("------------------------------");
const contato1 = {
    nome: 'Kevyn',
    tel1: '8888-9999',
    tel2: null
};
console.log(contato1);
console.log("------------------------------");
//tipo never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabao',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido');
        }
    }
};
produto.validarProduto();
console.log("------------------------------");
