import prod from './base.js'

// console.log(prod)
// prod.forEach((produto)=>console.log(`Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2).replace(".", ",")}`))

let valorMaior = prod.filter((produto)=>produto.preco>5.50?console.log(`Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2).replace(".", ",")}`):null);

console.log(valorMaior)

