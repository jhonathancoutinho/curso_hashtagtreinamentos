console.log ('Resolução do exercicio 01');

function calcularMediaAntesDaPf (nota1, nota2, nota3){
    const MediaAntesPf = (nota1 + nota2 + nota3)/3;
    console.log (`A média desse aluno é ${MediaAntesPf}`);
}

calcularMediaAntesDaPf(3,7,9);

console.log ('Resolução do exercicio 02');
function calcularMediaAntesPfAdaptada (nota1, nota2, nota3) {
    const MediaAntesPF = (nota1 + nota2 + nota3)/3;
    return MediaAntesPF;
}
function calcularMediaFinal (nota1,nota2,nota3,notaF) {
    const MediaSemPf = calcularMediaAntesPfAdaptada(nota1, nota2, nota3);
    const MediaFinal = (MediaSemPf+ notaF)/2;
    console.log (`A média final desse aluno é ${MediaFinal}`);
}

calcularMediaFinal (5,5,5,5);

console.log ('Resolução do exercicio 03');

function calcularFarenheit (temp){
    const farenheit = (9/5)*(temp)+32;
    console.log (`A temperatura correspondente em Farenheit é de ${farenheit}ºF`);
}

calcularFarenheit(20);

console.log ('Resolução do exercicio 04');

function calcularImposto (prod) {
    const valorProduto = prod * 1.08875;
    const acrescimoProduto = (prod * 1.08875) - prod;
    console.log (`O valor a ser pago é ${valorProduto} (sendo o ${acrescimoProduto} o resultado de acréscimo dos impostos sobre o valor inicial).`);
}

calcularImposto(100);