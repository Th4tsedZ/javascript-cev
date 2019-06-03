let numeros = [];

function adicionar() {
    let txtnum = document.getElementById('txtnum');
    let saida = document.getElementById('saida');

    if (txtnum.value.length === 0 || txtnum.value >= 100 || txtnum.value <= 0) {
        window.alert(`Valor inválido! Digite novamente.`)
    } else {
        let num = Number(txtnum.value);

        if (numeros.indexOf(num) === -1) {
            numeros.push(num);
            let item = document.createElement('option');
            item.text = `valor ${num} adicionado`;
            saida.appendChild(item);
            document.getElementById('res').innerHTML = '';
        } else {
            window.alert(`Valor já informado! Escolhe outro aí, faz favor.`)
        }
    }

    txtnum.value = '';
    txtnum.focus();
}

function finalizar() {
    let res = document.getElementById('res');
    let maior = 0;
    let menor = 100;
    let soma = null;
    let media = null;

    if (numeros.length === 0) {
        window.alert(`Lista vazia! Preenche isso daí, talkei?!`)
    } else {
        for (let n in numeros) {
            if (numeros[n] > maior) {
                maior = numeros[n];
            }

            if (numeros[n] < menor) {
                menor = numeros[n];
            }

            soma += numeros[n];
        }

        media = soma / numeros.length;

        res.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados. <br><br>`;
        res.innerHTML += `O maior número informado foi ${maior}. <br><br>`;
        res.innerHTML += `O menor número informado foi ${menor}.<br><br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br><br>`
        res.innerHTML += `A média de todos os valores digitados é ${media.toFixed(2)}.<br><br>`
    }
}

function limpar() {
    document.getElementById('txtnum').value = '';
    document.getElementById('saida').innerText = '';
    document.getElementById('res').innerText = '';

    numeros.length = 0;
    
}