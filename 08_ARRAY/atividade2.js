debugger

let receberNumeros = []
let somaNumeros = 0, i, expressao = ''

for(let i = 0; i <= 4; i++){
    receberNumeros[i] = Number(prompt('Digite os valores: '))
    somaNumeros += receberNumeros[i]
    expressao += `${receberNumeros[i]}, `
}

expressao = expressao.slice(0, -2)
console.log(`A soma é: ${somaNumeros}, e os dados inseridos foram: ${expressao}`) 