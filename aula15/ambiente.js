let numeros = [4, 3, 7, 1];

numeros.push(9);

numeros.sort();

// for (let n = 0; n < numeros.length; n++) {
//     console.log(numeros[n]);
// }

for (let n in numeros) {
    console.log(numeros[n]);
}

console.log('index de 3: ' + numeros.indexOf(3));