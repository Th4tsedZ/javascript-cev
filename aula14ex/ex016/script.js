function contar() {
    
    let inicio = Number(document.getElementById('txtinicio').value);
    let fim = Number(document.getElementById('txtfim').value);
    let passo = Number(document.getElementById('txtpasso').value);
    let res = document.getElementById('res');
    
    if (document.getElementById('txtinicio').value.length === 0 ||
        document.getElementById('txtfim').value.length === 0 ||
        document.getElementById('txtpasso').value.length === 0) {
        res.innerText = 'Impossível contar';
    } else {

        if (passo <= 0) {
            window.alert(`Passo inválido! Considerando passo 1`);
            passo = 1;
        }

        res.innerHTML = 'Contando: <br>';

        if (inicio < fim) {
            for (inicio; inicio <= fim; inicio += passo) {
                res.innerText += inicio.toString() + ' 👉 ';
            }
        } else if (inicio > fim) {
            for (inicio; inicio >= fim; inicio -= passo) {
                res.innerText += inicio.toString() + ' 👉 ';
            }
        }

        res.innerText += '🏴';
    }

}