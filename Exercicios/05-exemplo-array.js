// Calcular a média da altura de 5 pessoas
const alturas = [1.5, 1.6, 1.7, 1.8, 2]

let soma = 0;
alturas.forEach(alt => {
    soma += alt
    console.log("soma = ", soma)
})

console.log("Média das alturas = ", (soma/alturas.length)) 