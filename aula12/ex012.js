var hora = new Date().getHours();

// console.log(agora.getHours() + ":" + agora.getMinutes());

console.log(`agora são exatamente ${hora} horas`)

if (hora < 12){
    console.log(`bom dia`)
} else if (hora < 18) {
    console.log(`boa tarde`)
}  else if (hora <= 23) {
    console.log(`boa noite`)
} else {
    console.log(`horário inválido`)
}