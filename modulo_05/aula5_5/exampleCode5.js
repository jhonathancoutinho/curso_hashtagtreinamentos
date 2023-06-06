const usuario = {nome: 'Jhonathan', idade: 33, time: 'Flamengo'};
const mensagemdeBoasVindas1 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemdeBoasVindas2 = 'Bem vindo, torcedor Tricolor!';
const mensagemdeBoasVindas3 = 'Bem vindo, torcedor Vascaíno!';
const mensagemdeBoasVindasGeral = 'Bem vindo, amante do esporte';
const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

let numeroDeRepeticoes = 0;

do{
usuario.time === 'Flamengo' && usuario.idade >=18
    ? console.log (mensagemdeBoasVindas1)
    : usuario.time === 'Fluminense' && usuario.idade >=18
    ? console.log (mensagemdeBoasVindas2)
    : usuario.idade >=18 
    ? console.log(mensagemdeBoasVindasGeral)
    : console.log('Não vendemos ingressos para menores de 18 anos');

console.log (mensagemDeEscolha);
console.log (mensagemFinal);

numeroDeRepeticoes++;
} while ( numeroDeRepeticoes < 5);