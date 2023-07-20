alert("Olá, responda o questionário")

var nome = window.prompt("Qual seu nome?")

var idade = window.prompt("Qual sua idade?")

var mensagem = (`Olá, ${nome}! Você tem ${idade} anos`);
    document.write(`<p>  ${mensagem} </p>`);