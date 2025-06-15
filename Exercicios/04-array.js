const numero = [1, 2]

console.log("array inicial: ", numero)

numero.push(3)
console.log("array push: ",numero)

numero.pop() //remove do final
console.log("array pop: ", numero)

numero[0] = 4 //substitui a posição 0 por 4
console.log("array [0] = 4: ", numero)

numero.shift() //remove do inicio
console.log("array shift: ", numero)

numero.unshift(99) //adiciona no começo
console.log("array unshift: ", numero)

numero.push(1)
numero.push(2)
numero.push(3)
numero.push(4)
numero.push(5)
numero.push(6)
console.log("array dps de pushes = ", numero)

// const arraySlice =  numero.slice(2,5)
// console.log("Sliced array = ", arraySlice)

// numero.splice(2, 3)
// console.log("splice = ", numero)

let soma = 0
console.log("forEach:")
numero.forEach(item => {
    console.log(item)
    soma += item
})

console.log("soma = ", soma);




console.log("array final: ", numero)

