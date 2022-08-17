let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// 1 = true
isAtivo = 1
//! = negação (aquele valor se torna falso) !! = retorna ao estado anterior (verdadeiro) 
console.log(!!isAtivo)

console.log('verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar:')
console.log(!!('' || null || 0 || ' '))


let nome = ''
//  valor padrão, caso nada seja declarado na variavel
console.log(nome || 'Desconhecido')