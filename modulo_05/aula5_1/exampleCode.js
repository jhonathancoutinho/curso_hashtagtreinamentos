const usuario = {nome: 'Jhonathan', idade: 33, time: 'Flamengo'};
const mensagemdeBoasVindas1 = ' Bem vindo, torcedor Tricolor!';
const mensagemdeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!';

if (usuario.time === 'Flamengo'){
    console.log (mensagemdeBoasVindas2);
}

if (usuario.time === 'Fluminense'){
    console.log (mensagemdeBoasVindas1);
}

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

console.log (mensagemDeEscolha);
console.log (mensagemFinal);