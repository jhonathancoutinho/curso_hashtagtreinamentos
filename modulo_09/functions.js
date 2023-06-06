// Exemplo de função anônima
setTimeout (function (){
    writeThisMenssageConsole('Função que defini dentro do setTimeout');
}, 2000);

// Chamando uma função dentro de uma função anônima
function writeThisMenssageConsole (menssage) {
   console.log (menssage)  
}

// writeThisMenssageConsole ('Escrevi a mensagem com sucesso!');