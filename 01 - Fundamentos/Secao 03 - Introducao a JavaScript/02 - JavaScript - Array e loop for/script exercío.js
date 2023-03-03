let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let media = 0;
let maiorNumero = 0;
let qtdNumerosImpar = 0;
let menorNumero = 999;
let contagem = 25;


for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}


for (let index = 0; index < numbers.length; index += 1) {
    sumNumbers = sumNumbers + numbers[index];
}

console.log (sumNumbers);


for (let index = 0; index < numbers.length; index += 1) {
    media = sumNumbers / numbers.length;
}

console.log (media);


if (media > 20){
    console.log('Media maior que 20');
} else if( media <= 20) {
    console.log('Media maior que 20');
}


for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);


for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0){
        qtdNumerosImpar = qtdNumerosImpar + 1;
    }
}
if (qtdNumerosImpar === 0){
    console.log('Nenhum número par encontrado.');
} else {
    console.log(qtdNumerosImpar);
}



for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero){
        menorNumero = numbers[index];
    }
}
console.log(menorNumero);



for (let index = 0; index <= contagem; index += 1) {
    console.log(index);
}


for (let index = 0; index <= contagem; index += 1) {
    console.log(index / 2);
}