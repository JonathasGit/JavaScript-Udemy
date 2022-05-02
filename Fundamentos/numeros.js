const peso1 = 1.0;
const peso2 = Number('2.0');





console.log(peso1, peso2)


console.log(Number.isInteger(peso1));// Saber se  o valor é inteiro ou não 
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // tofixed mostra apenas o valor das casas que definimos.
console.log(media.toString()); // convertendo em string, ai mostra o valor 7.870999999999996
console.log(media.toString(2)); // Passando para Binario
console.log(typeof media); // Mostrando o tipo de number
console.log(Number); // NUmber com N maisculo representa a função 
