function verificar() {
    let anoAtual = new Date().getFullYear();
    let fAno = Number(document.getElementById('txtano').value);
    let res = document.getElementById('res');

    if (document.getElementById('txtano').value.length === 0 || fAno > anoAtual) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = anoAtual - fAno;
        let genero = '';
        let img = document.createElement('img');


        if (fsex[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/menino.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'images/jovem-h.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'images/homem.png')
            } else {
                img.setAttribute('src', 'images/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'images/menina.png');
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'images/jovem-m.png');
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'images/mulher.png');
            } else {
                img.setAttribute('src', 'images/idosa.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamoso ${genero} com ${idade} anos`;
        res.appendChild(img);

    }


}