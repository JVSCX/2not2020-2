//expressao de funcao "tradicional"

//caracteristica desta funcao
//-um unico argumento -> n
//-seu corpo tem apenas uma linha de codigo com return
let quadrado = function(n) {
    return n * n
}

//a funcao tradicional acima pode ser transformada em uma ARROW FUNCTION
//- desaparece a palavra fuction
//-o argumento nao precisa de parenteses
//-apos o argumento ha a flecha (arrow) =>
//-as chaves e a palavra return sao omitidos
let quadrado2 = n => n * n

console.log(quadrado(6))
console.log(quadrado2(6))

//situacao alternativa 1: funcao sem argumento

//retorna um numero aleatorio entre 0 e 99
let aleatorio = function() {
    //math.random() -> gera um numero aleatorio entre 0 e 1 (fracionario)
    //Math.floor() ->"corta fora" as casas decimais de um numero
    return Math.floor(Math.random() * 1000)   
}

//

console.log('------------------------------------------')
console.log(aleatorio())

//arrow fuction com 0 argumento
//-os parenteses vazios marcam o lugar do argumento (obrigatorios)
let aleatorio2 = () => Math.floor(Math.random() * 1000)




    

