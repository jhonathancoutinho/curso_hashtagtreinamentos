const regularArray = [2, 5, 2, 7, 1, 3, 4, 7 ];

// Feito na estrutura While 
// let count = 0;
// while (count < regularArray.length) {
    // regularArray[count] += count;
    //count++;}
// console.log ('O array atual é:', regularArray);
// Feito na estrutura For

for (let count = 0; count < regularArray.length; count++) {
    regularArray[count] += count;
}

console.log ('O array atual é:', regularArray);