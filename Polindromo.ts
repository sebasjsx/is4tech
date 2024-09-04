//frase o palabra
let frase: string = "A luna ese anula";

//minuscula y sin espacios
let fraseLimpia = '';
for (let i = 0; i < frase.length; i++) {
    let result = frase[i].toLowerCase();

    if (result !== ' ') {
        fraseLimpia += result;
    }

}

//si es palindromo o no
let esPalindromo = fraseLimpia === fraseLimpia.split('').reverse().join('');

console.log(`"${frase}" ${esPalindromo ? 'es' : 'no es'} un palíndromo.`);