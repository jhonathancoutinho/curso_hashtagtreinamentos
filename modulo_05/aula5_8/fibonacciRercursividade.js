function calculateFibonacciTerm (termNumber) {
    if (termNumber === 0) {
        return 0;
    }
    if (termNumber === 1) {
        return 1;
    }
    return (
        calculateFibonacciTerm(termNumber -1) + 
        calculateFibonacciTerm(termNumber -2)
    );
}

console.log (`O valor do termo 6 da sequência de Fibonnacci é ${calculateFibonacciTerm(6)} `);