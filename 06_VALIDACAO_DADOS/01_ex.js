const sexo = prompt('Informe seu sexo!\nM - para mulher\nH - Homem\nDigite o seu sexo: ').toUpperCase
const alturaValor = Number(prompt('Digite sua altura: '))

if(isNaN(alturaValor) || sexo !== 'M' || sexo !== 'F' || alturaValor > 2.51){
    alert('Você digitou algum caracter ou valor inválido')
    location.reload
}

let pesoIdeal = 0

if(sexo === 'M' && sexo !== 'H'){
    pesoIdeal = 21 * (Math.pow(alturaValor, 2))
    alert(`Seu peso ideal é igual á: ${pesoIdeal.toFixed(1)}Kgs `)
}else if(sexo === 'H' && sexo !== 'M'){
    pesoIdeal = 22 * (Math.pow(alturaValor, 2))
    alert(`Seu peso ideal é igual á: ${pesoIdeal.toFixed(1)}Kgs `) 
}else{
    alert('Genêro inválido.')
    location.reload
}
