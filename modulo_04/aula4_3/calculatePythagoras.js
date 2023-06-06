function calculateSquareRoot(radicand) {
  try{
    if(radicand < 0) {
      throw new Error('O radicando deve ser real e positivo');
    }
  return radicand ** (1 / 2);
  } catch (error) {
    console.log (error);
  }
}

function calculatePythagoras(side1, side2) {
  const sum = side1 ** 2 + side2 ** 2;
  return calculateSquareRoot(sum);
}

const firstSideRef = document.getElementById('side-1');
const secondSideRef = document.getElementById('side-2');
const calculateButton = document.getElementById('calculate-hypotenuse');
const answerDiv = document.getElementById('answer');

function onCalculateButtonClick() {
  try {
  const firstSide = Number(firstSideRef.value);
  const secondSide = Number(secondSideRef.value);
  if (
    isNaN(firstSide) || 
    isNaN(secondSide) ||
    firstSide <= 0 ||
    secondSide <= 0
  ) {
    throw new Error('Entradas inválidas. Os tamanos dos catetos devem ser fornecidos, e seus valores devem ser números positivos exclusivamente!');
  }
  answerDiv.classList.remove('hidden-element');
  answerDiv.innerHTML = `A hipotenusa de um triangulo de lados ${firstSide} e ${secondSide} é: ${calculatePythagoras(
    firstSide,
    secondSide
  )
    .toFixed(3)
    .replace(/[.,]000$/, '')}
  <div class="left-point"></div>`;
  } catch (error) {
    console.log(error);
  }
}

calculateButton.addEventListener('click', onCalculateButtonClick);
