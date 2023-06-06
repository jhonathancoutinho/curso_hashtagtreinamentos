const usuario = {nome: 'Jhonathan', idade: 33, time: 'Flamengo'};
const mensagemdeBoasVindas1 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemdeBoasVindas2 = 'Bem vindo, torcedor Tricolor!';
const mensagemdeBoasVindas3 = 'Bem vindo, torcedor Vascaíno!';
const mensagemdeBoasVindas4 = 'Bem vindo, torcedor Santista!';
const mensagemdeBoasVindas5 = 'Bem vindo, torcedor Náutico!';
const mensagemdeBoasVindas6 = 'Bem vindo, torcedor Atlético Mineiro!';
const mensagemdeBoasVindas7 = 'Bem vindo, torcedor Cruzeiro!';
const mensagemdeBoasVindas8 = 'Bem vindo, torcedor Corinthians';

const mensagemdeBoasVindasGeral = 'Bem vindo, amante do esporte';

switch (usuario.time) {
    case 'Flamengo':
        console.log (mensagemdeBoasVindas1);
        break;
    case 'Fluminense':
        console.log (mensagemdeBoasVindas2);
        break;
    case 'Vasco':
        console.log (mensagemdeBoasVindas3);
        break;
    case 'Santos':
        console.log (mensagemdeBoasVindas4);
        break;
    case 'Náutico':
        console.log (mensagemdeBoasVindas5);
        break;
    case 'Atlético MG':
        console.log (mensagemdeBoasVindas6);
        break;
    case 'Cruzeiro':
        console.log (mensagemdeBoasVindas7)
        break;
    case 'Corinthians':
        console.log (mensagemdeBoasVindas8)
        break;
    default:
        console.log (mensagemdeBoasVindasGeral);
    
}

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

console.log (mensagemDeEscolha);
console.log (mensagemFinal);