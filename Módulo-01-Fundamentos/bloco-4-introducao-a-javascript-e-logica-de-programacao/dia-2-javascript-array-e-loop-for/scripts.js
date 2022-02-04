let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

console.log(soma);

// // 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// // * A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

let average = soma / numbers.length

console.log(average);

// // // 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

const valor = soma / numbers.length;

if (valor > 20) {
    console.log(valor + ' valor maior que 20');
}
else {
    console.log(valor, ' valor menor que 20');
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) maior = numbers[index]; {
    }
}

console.log('maior valor', maior);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < result) {
        result = numbers[index];
    }
}

console.log('menor valor', result)

//8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let index = 0; index < myArray.length; index += 1) {
    console.log(myArray[index]);
}

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let index = 0; index < myArray.length; index += 1) {
    console.log(myArray[index] / 2);
}