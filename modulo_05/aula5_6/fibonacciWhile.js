function calculateFibonacciTerm (termNumber) {
    let lastTerm = 1;
    let secondToLast = 0;

    if (termNumber === 0){
        return 0;
    }
    if (termNumber === 1){
        return 1;
    }
    let currentInteration = 2;
    while(currentInteration <= termNumber ){
        let auxVar = lastTerm + secondToLast;
        secondToLast = lastTerm;
        lastTerm = auxVar;
        currentInteration++;
    }
    return lastTerm;
}

console.log (`O valor do termo 6 da sequência de Fibonnacci é ${calculateFibonacciTerm(6)} `);