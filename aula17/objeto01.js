let amigo = {nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(kg = 0) {
        this.peso += kg;
    }
};

console.log(amigo.nome);
console.log(amigo.sexo);
console.log(amigo.peso);
amigo.engordar(10);
console.log(amigo.peso);