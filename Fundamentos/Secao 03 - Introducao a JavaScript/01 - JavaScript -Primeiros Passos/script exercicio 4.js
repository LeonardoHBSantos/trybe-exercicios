const currentHour = 12;
let message = [];

if (currentHour >= 22) {
    message.push('Não deveríamos comer nada, é hora de dormir');
} else if (currentHour >= 18 && currentHour < 22) {
    message.push('Rango da noite, vamos jantar :D');
} else if (currentHour >= 14 && currentHour < 18) {
    message.push('Vamos fazer um bolo pro café da tarde?');
} else if (currentHour >= 11 && currentHour < 14) {
    message.push('Hora do almoço!!!');
} else if (currentHour >= 4 && currentHour < 11) {
    message.push('Hmmm, cheiro de café recém-passado');
}

console.log(message);