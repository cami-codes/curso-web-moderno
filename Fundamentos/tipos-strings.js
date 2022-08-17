const escola = "Cod3r"

// mostra caractere no índice 4, começando do 0
console.log(escola.charAt(4))

// valor do caracter na tabela ASCII
console.log(escola.charCodeAt(3))

console.log(escola.indexOf('3'))

// a partir do índice 1
console.log(escola.substring(1))

// vai do zero até o índice 3 sem o índice 3
console.log(escola.substring(0, 3))

// concatenação com o .concat
console.log('Escola '.concat(escola.concat("!")))

// concatenação com +
console.log('Escola ' + escola + "!")

// substitui o índice pelo que você quiser
console.log(escola.replace(3, 'e'))

// converter string pra array
console.log('Ana, Maria, Pedro'.split(','))