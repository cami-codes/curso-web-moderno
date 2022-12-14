const peso1 = 1.0

// outra maneira de declarar uma variável
const peso2 = Number(2.0)

console.log(peso1, peso2)

// verificar se variável é um inteiro
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// toFixed(2) determina o número de casas decimais
console.log(media.toFixed(2))

// converter valor numérico para string
console.log(media.toString())

// converter um ponto flutuante para um valor binário
console.log(media.toString(2))
