const usuario = {nome: 'Jhonathan', idade: 33, time: 'Flamengo'};
const mensagemdeBoasVindas1 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemdeBoasVindas2 = 'Bem vindo, torcedor Tricolor!';
const mensagemdeBoasVindas3 = 'Bem vindo, amante do esporte';

usuario.time === 'Flamengo'
    ? console.log (mensagemdeBoasVindas1)
    : usuario.time === 'Fluminense' ? console.log (mensagemdeBoasVindas2) : console.log(mensagemdeBoasVindas3)
    ;

const mensagemDeEscolha = 
    'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

console.log (mensagemDeEscolha);
console.log (mensagemFinal);