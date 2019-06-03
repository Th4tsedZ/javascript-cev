function fatorial(n) {
    let fat = 1;

    for (let i = 1; i <= n; i++){
        fat *= i;
    }

    return fat;
}

console.log(`fatorial de 5: ${fatorial(5)}`);