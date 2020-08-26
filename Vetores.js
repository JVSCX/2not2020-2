let vetor1 = []
let vetor2 = Array()

//criacao de vetores com valores iniciais
let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array( 'vaca', 'cachorro', 'gato', 'papagaio')

//insercao de novos valores em um vetor

//forma 1: push() > adiciona novos elemesntos Ao Final do vetor
vetor1.push('laranja')
vetor1.push('limao')

console.log(vetor1)

//forma 2: unshift() > adiciona novos elementos NO INICIO do vetor
vetor1.unshift('maça')
console.log(vetor1)

vetor1.unshift('abacaxi')
console.log(vetor1)

//forma 3: splice() >
//1- parametro: a posicao de insercao
//2- parametro: quantos elementos serao eliminados (para insercao == 0)
vetor1.splice(2, 0, 'morango')
console.log(vetor1)

vetor1.splice(1, 0, 'jaca')
console.log(vetor1)

//Remocao de elementos do vetor

//Forma 1: pop() > retira o ULTIMO elemento do vetor
let x1 = vetor1.pop()
console.log(vetor1, x1)

//Forma 2: shift() > retira o PRIMEIRO elemnto do vetor
let x2 = vetor1.shift()
console.log(vetor1, x2)

//Forma 3: splice()
//1- parametro: a posicao para remocao
//2- parametro: a quantidade de elementos a serem removidos
//Obs: O retorno de splice() na remocao sera um vetor contendo o(s) item(ns) removido(s)
//
let x3 = vetor1.splice(2, 1)
console.log(vetor1, x3)

//O splice() tambem serve para fazer substituicoes
vetor1.splice(1, 1, 'pera')
console.log(vetor1)

//Colocando mais alguns elementos no vetor
vetor1.push('amora', 'jabuticaba')
vetor1.push('pessego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

//Metodos de percurso de vetores

//Forma1: usando o for tradicional
//O inicio da variavel é sempre na posicao 0 e seu incremento
//deve ir ate uma posicao ANTES do seu numero de elementos (length) 

// i++ significa i = i + 1
for(let i = 0; i < vetor1.length; i++ ) {
    console.log(vetor1[i])
}

console.log('------------------------------------')

//Forma 2: for..of
//Percorrer o vetor do primeiro ao ultimo elemento de uma forma
//mais simples que o for tradicional

for(let fruta of vetor1) {
    console.log(fruta)
}
