const escola = "Cod3r";
var nome = "Nome de exemplo";   

console.log(escola.charAt(4)); // irá mostrar o indice R começando do C que é zero 
console.log(escola.charAt(5)); // não irá mostrar erro, vai mostrar vazio.
console.log(escola.charCodeAt(3)); // mostrar valor dele na tabela ASC ou Unicode
console.log(escola.indexOf('3')); // index associado ao digito 3

//Praticando
console.log(escola.indexOf('C')); 
console.log(escola.indexOf('o'));
console.log(escola.indexOf('d'));
console.log(escola.indexOf('3'));
console.log(escola.indexOf('r'));

console.log(nome.charAt(1));
console.log(nome.charAt(10));

//função  substring = a partir daquele indice até o final, ou entre intervalos  

console.log(escola.substring(1));
console.log(escola.substring(0,3)); // intervalo, do indice 0 até o 3 sem incluir o 3 

//Função de concatenar 
console.log('Escola '.concat(escola).concat("!"));

//Função replace
console.log(escola.replace(3, 'e'));
//console.log(escola.replace(/\d/, 'e')); //epressão regular, todos digitos do texto pela letra e


// Transformar as string em array, separadas por virgulas.

console.log('Ana,Maria,Pedro'.split(','));


//Cadeia de caracteres o String, 

console.log(nome.indexOf('N'));
console.log(nome.indexOf('o'));
console.log(nome.indexOf('e'));



