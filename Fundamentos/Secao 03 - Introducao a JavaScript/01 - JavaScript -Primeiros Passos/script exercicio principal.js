let a = 7;
let b = 3;
let c = 15;

let angulo1 = 90;
let angulo2 = 30;
let angulo3 = 60;

let pecaDeXadrex = 'REI';

let porcentagemNota = 950;

let par = null;
let impar = null;

let custoProduto = 75;
let custoTotalProduto = custoProduto + (20/100 * custoProduto);
let valorDoProduto = 100;
let quantidadeVendida = 1000;
let lucro = 0;
let lucroTotal = 0;

let salarioBruto = 4000;
let salarioBase = 0;
let salarioLiquido = 0;

console.log('Adição de ' + a + ' + ' + b + ' resulta em ' + (a + b) + '.');
console.log('Subtração de ' + a + ' - ' + b + ' resulta em ' + (a - b) + '.');
console.log('Multiplicação de ' + a + ' x ' + b + ' resulta em ' + (a * b) + '.');
console.log('Divisão de ' + a + ' / ' + b + ' resulta em ' + (a / b) + '.');
console.log('Módulo de ' + a + ' % ' + b + ' resulta em ' + (a % b) + '.');


if (a > b) {
    console.log('O número ' + a + ' é maior que o número ' + b + '.');
} else {
    console.log('O número ' + b + ' é maior que o número ' + a + '.');
}


if (a > b && a > c) {
    console.log('O número ' + a + ' é o maior de todos os números.');
} else if (b > a && b > c) {
    console.log('O número ' + b + ' é o maior de todos os números.');
} else {
    console.log('O número ' + c + ' é o maior de todos os números.');
}

if (a > 0){
    console.log('O número é positivo.');
} else if ( a < 0){
    console.log('O número é negativo.');   
} else {
    console.log('O número é nulo.');
}

if ( angulo1 + angulo2  + angulo3 === 180){
    console.log('Os ângulos fornecidos são válidos para um triângulo.')
} else {
    console.log('Os ângulos fornecidos não correpondem ao ângulos de um triângulo.')
}

switch (pecaDeXadrex.toLocaleLowerCase()) {
    case 'rei':
        console.log('O Rei movimenta para todos os lados, porém apenas uma casa por vez.');
        break;

    case 'rainha':
        console.log('A Rainha movimenta para todos os lados, quantas casas quiser.');
        break;

    case 'bispo':
        console.log('O Bispo movimenta apenas em diagonal, quantas casas quiser.');
        break;

    case 'cavalo':
        console.log('O Cavalo se movimenta em formato de L, sendo 3 casas pra qualquer lado e uma para a esquerda ou direita, ele é a única peça que pode pular peças do seu tabuleiro.');
        break;

    case 'torre':
        console.log('A torre se movimenta apenas em linha reta, porém em qualquer direção, quantas casa quiser.');
        break;

    case 'peao':
        console.log('O peão só pode se movimentar para frente e apenas uma casa por vez, se caso for o primeiro movimento da peça, ele pode pular 2 casas, e ele captura somente as peças que estejam em diagonal e a frente.');
        break;
    default:
        console.log(pecaDeXadrex);
}

if (porcentagemNota <= 100 && porcentagemNota >= 0) {
    if (porcentagemNota >= 90){
        notaAluno = 'A';
    } else if (porcentagemNota >= 80 && porcentagemNota < 90){
        notaAluno = 'B';
    } else if (porcentagemNota >= 70 && porcentagemNota < 80){
        notaAluno = 'C';
    } else if (porcentagemNota >= 60 && porcentagemNota < 70){
        notaAluno = 'D';
    } else if (porcentagemNota >= 50 && porcentagemNota < 60){
        notaAluno = 'E';
    } else if (porcentagemNota < 50){
        notaAluno = 'F';
    }

    console.log('O Aluno é nota ' + notaAluno + '.')

} else if (porcentagemNota > 100 || porcentagemNota < 0) {
    console.log('O valor fornecido não correponde a uma porcentagem, revise-o e tente novamente.');
}

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0 ){
    par = true;
} else {
    par = false;
}

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0 ){
    impar = true;
} else {
    impar = false;
}

if (custoProduto >= 0 && custoTotalProduto >= 0 && valorDoProduto >= 0 && quantidadeVendida >= 0) {
    lucro = (valorDoProduto - custoTotalProduto)
    lucroTotal = lucro * quantidadeVendida;
    console.log('O lucro unitário foi de R$' + lucro + ' e o lucro total nessa venda foi de R$' + lucroTotal + '.');
} else {
    console.log('Erro: alguns dos valores inseridos são inválidos.')
}


if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (8/100 * salarioBruto);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (9/100 * salarioBruto) 
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (11/100 * salarioBruto);
} else if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - 570.88;
}

if (salarioBase > 0 && salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - (7.5/100 * salarioBase - 142.80)
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - (15/100 * salarioBase - 354.80)
} else if (salarioBase > 3751,05 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - (22.5/100 * salarioBase - 636.13)
} else if (salarioBase > 4664.68) {
    salarioLiquido = salarioBase - (27.5/100 * salarioBase - 869.36)
}
console.log('O Salário Liquido com base nos valores fornecido é de R$' + salarioLiquido + '.');