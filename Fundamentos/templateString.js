const nome = 'Jonathas';
const concatenacao = 'Olá ' + nome + '!';

//Fazendo no template Strings - Consigo até quebrar a linha
const template = `
    Olá
    ${nome}!`
    console.log(concatenacao, template);
    
    //expressoes...

    console.log(`1 + 1 = ${1 + 1}`);

    // Função arrow
    const up = texto => texto.toUpperCase();
    console.log(`Ei... ${up('Cuidado')} !`);