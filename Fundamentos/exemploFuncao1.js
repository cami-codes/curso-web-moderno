// Uma função é uma ação, ela executa um processo, baseado na setença de código
// Um trecho de código que você pode usar em vários lugares no seu código
// Uma função é um bloco de código nomeado.
// Dentro da função você vai fazer toda a 'receita' e no final você retorna um resultado

// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// javascript é esquisito e não liga pros parametros 🤨
imprimirSoma(2, 3, 4, 5, 6, 7, 8)


// Função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2,3))
