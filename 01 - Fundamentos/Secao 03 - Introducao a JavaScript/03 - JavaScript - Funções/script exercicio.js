let numero = 10;
let fatorial = 1;

let word = 'banana';
let invertedWord = '';

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = '';
let maiorPalavra = '';



for (let index = numero; index > 0; index -= 1){
    fatorial = fatorial * index;
}
console.log(fatorial);



for (let index = (word.length) - 1; index >= 0; index -= 1){
    invertedWord += word[index];
}
console.log(invertedWord);



for (index = 0; index < array.length; index += 1){
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);


menorPalavra = maiorPalavra
for (index = 0; index < array.length; index += 1){
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(menorPalavra)


let numerosPrimos = [2, 3, 5, 7];
let maiorNumeroPrimo = 0;
let numeroPrimo = 50;
for (let index = 2; index < numeroPrimo; index += 1) {
        if (index % 2 !== 0 && index % 3 !== 0 && index % 5 !== 0 && index % 7 !== 0) {
            numerosPrimos.push(index);
    }
}
console.log(numerosPrimos[numerosPrimos.length - 1]);
