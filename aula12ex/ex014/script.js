function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var hora = new Date().getHours();

    hora = 16;

    msg.innerText = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "images/manha.png";
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = "images/tarde.png";
        document.body.style.background = '#b9846f';
    } else {
        //BOA NOITE
        img.src = "images/noite.png";
        document.body.style.background = '#515154';
    }
}