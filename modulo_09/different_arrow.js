// Função Arrow
const myLoggingFunction = (message) => {
    console.log (message);
};

// Variavel que chama uma função
const myNormalLoggingFunction = function (message) {
    console.log (message);
};

// Variável arrow function com apenas um critério

const myLoggingFunctionOneParameter = message => {
    console.log (message);
};

// Variavel arrow function com apenas uma instrução

//prettier-ignore
const myLoggingFunctionOnlyOneInstruction = (message, message2) => console.log (message + message2);


myLoggingFunction ('Teste da minha função arrow do arquivo.');

myNormalLoggingFunction ('Teste da minha função normal armazenada na variável.');

myLoggingFunctionOneParameter ('Teste de parametros');

myLoggingFunctionOnlyOneInstruction ('Teste de função:', 'bora ver se deu certo');