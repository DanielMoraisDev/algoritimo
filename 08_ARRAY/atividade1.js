let numeroSequencia = [1,2,3,4]
let expressao = ''

for(let i = (numeroSequencia.length - 1); i >= 0; i--){
    expressao += `${numeroSequencia[i]}, `
}

expressao = expressao.slice(0, -2)

console.log(expressao)
