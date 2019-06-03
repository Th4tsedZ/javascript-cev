function calcular() {
    let num = Number(document.getElementById('txtnum').value);
    let mult = null;
    let tab = document.getElementById('seltab');

    tab.innerHTML = '';

    if (document.getElementById('txtnum').value.length == 0) {
        window.alert('Por favor, informe um número!');
    } else {
        for (let i = 0; i <= 10; i++) {
            mult = num * i;
            let item = document.createElement('option');
            item.text = `${num} x ${i} = ${mult}`;
            item.value = `tab${i}`;
            tab.appendChild(item);
        }
    }

}