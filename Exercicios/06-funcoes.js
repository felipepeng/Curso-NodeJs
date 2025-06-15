

function somar(nums) {
    let soma = 0
    nums.forEach((numero) => {
        soma += numero;
    });

    return soma;
}

function sub(nums) {
    let sub = 0
    nums.forEach((numero) => {
        sub -= numero;
    });

    return sub;
}

const numeros = [1, 2]

console.log(somar([1, 2, 3, 4, 5]))

// Exportando a função somar
module.exports = {somar, substract: sub}


