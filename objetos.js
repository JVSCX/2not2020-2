//Declaracao de objeto vazio
let pessoa1 = {}             //metodo moderno
let pessoa2 = new Object()  //metodo tradicional

//declarando e inicializando um objeto ja com propriedades
//- propriedade -> atributo + valor
let pessoa3 = {
    nome: 'joao das couves',
    naturalidade: 'franca/sp',
    "data de nascimento": '1997-11-03',
    estudante_fatec: true
}

//acessando uma propriedade de um objeto
//atribuindo é uma unica palavra _> sintaxe do ponto
console.log(pessoa3.nome)
console.log(pessoa3.estudante_fatec)

//acessando uma propiedade composta por varias plavras ->
//sintaxe dos colchetes
console.log(pessoa3['data de nascimento'])

//sintaxe dos colchetes SEMPRE funciona, mesmo com propriedades
//cujo nome é uma unica palavra
console.log(pessoa3['naturalidade'])

let atrib = 'nome'
console.log(pessoa3[atrib])

//criando novas propriedades em um objeto
//-> basta atribuir o valor a um nome de atributo, segundo
//a sintaxe apropriada a cada caso
pessoa3.nacionalidade = 'portuguesa'            //unica palavra
pessoa3['registro de estrangeiro'] = 123456789 // varias plavras

consolelog(pessoa3)

//elimindo uma propriedade
delete pessoa3.estudante_fatec

console.log('------------------------------------')

console.log(pessoa3)

console.log('------------------------------------')

//como percorrer todas as propriedades de um objeto: for..in
for(let prop in pessoa3) {
    console.log(prop)
}

//listando atributo e valor de um objeto usando for..in
for(let atrib in pessoa3) {
    //console.log('atributo: ' + atrib + '; valor: ' + pessoa3[atrib])

    //usando string template ( delimitado por acentos GRAVES)
    console.log(`atributo: ${atrib}; valor: ${pessoa3[atrib]}`)
}

