let numero = 3

debugger
switch(numero){
    case 1,2:
        alert('comando 01')
        break
    case 3: //no caso dele não encontrar ele quebra
        alert('comnado 03')
        break
    default: //caso nenhum "caso" seja encontrado ele usa o default\
        alert('OTARIO')
        break
}
