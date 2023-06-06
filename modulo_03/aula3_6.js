console.log('Resolução do exercício 1');

function calcularMedia (nota1, nota2, nota3) {
    const mediaNotas = (nota1 + nota2 + nota3) /3;
    console.log(`A media desse aluno é ${mediaNotas}`);
}
calcularMedia(3,5,8);

console.log ('Resolução do exercício 2');

function calcularMediaAdaptado(nota1, nota2, nota3) {
    const mediaDasNotas = (nota1 + nota2 + nota3) / 3;
    return mediaDasNotas;
  }
  function calcularMediaFinal(nota1, nota2, nota3, notaPf) {
    const mediaSemPf = calcularMediaAdaptado(nota1, nota2, nota3);
    const mediaFinal = (mediaSemPf + notaPf) / 2;
    console.log(`a média final desse aluno é ${mediaFinal}`);
  }
  
calcularMediaFinal(3,5,8,9);
