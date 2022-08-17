const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

// template string permite a quebra de linha
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressões template string
console.log(`1 + 1 = ${1 + 1}`)

// função pra deixar tudo em maiusculo
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)