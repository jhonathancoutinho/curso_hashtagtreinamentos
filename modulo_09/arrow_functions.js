function writeUserMenssageOnConsole (message) {
    console.log (message);
}

writeUserMenssageOnConsole ('Escreva esse argumento no console.');

const writeUserMessageVariableVersion = function (message) {
    console.log (message);
};

writeUserMessageVariableVersion (
    'Escreva esse argumento no console - Versão variável'
);

// como chamar uma arrow function

const writeUserMenssageArrowVersion = (message) => {
    console.log (message);
};

writeUserMenssageArrowVersion ('Escreva esse argumento no console - Versão  Flecha ~ (Arrow function)');

// como chamar uma arrow function anônima através de uma const

const variavelQueAbrigaArrowFunction = () => {
    console.log ('Essa é uma função arrow function anônima');
};

variavelQueAbrigaArrowFunction ();