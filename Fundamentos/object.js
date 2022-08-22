// as chaves representam um objeto
// um objeto em javascript é uma coleção de chave / valor
// você tem o nome do atributo(id) e você passa um valor pra ele, podendo ser boolean, string, numero etc
// objetos podem ter outros objetos dentro deles
const prod1 = {}
prod1.nome = 'Camila Martins'
prod1.preco = 5000.90

prod1['desconto'] = 0.40

console.log(prod1)


const prod2 = {
    nome: 'Camiseta',
    preco: 59.90,
    outroObjeto: {
        categoria: 'feminina',
    }
}

console.log(prod2)

// isso é diferente de um json.

// exemplo de json:

'{ "nome": "Camiseta", "preco": 79.90}'