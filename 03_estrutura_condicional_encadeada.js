alert('Estrutura condicional simples')

//ele compara apenas com o que está dentro da condição
if(true){
    alert('instrução dentro do if')
}

debugger //verificar quais serão executados
if(false){
    alert('bloco de codigo 01 executado')
    //como é possivel perceber temos dois trues, mas apenas primeiro, pois pra que ele iria atras de outro resultado?
}else if(true){
    alert('bloco de codigo 02 executado')
}else if(false){
    alert('bloco de codigo 03 executado')
}else{
    alert('bloco de codigo 04 executado')
}
