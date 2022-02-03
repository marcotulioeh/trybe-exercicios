// Variável e constante

const myName = "Marco Túlio";
const birthCity = "Belo Horizonte";
let birthYear = 1993;
birthYear = 2030;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

// if/else

const nota = 59.99;

if (nota >= 80) {
    console.log('Parabésn, você foi aprovado(a)!');
}
else if (nota < 80 && nota >= 60) {
    console.log('Você está na lista de espera.');
}
else {
    console.log('Você foi reprovado(a).');
}

// Switch e Case

let estado = 'aprovada'

switch (estado) {
    case 'aprovada':
        console.log('Parabéns!');
        break;
    
    case 'lista':
        console.log('Lista de espera.');
        break;

    case 'reprovada':
        console.log('Reprovada(o).');
        break;

    default:
        console.log('Não se aplica');
        break;
}