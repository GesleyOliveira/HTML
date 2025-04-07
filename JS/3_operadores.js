const numero01 = 5;
const numero02 = 10;
const numero03 = 15;

const resultadoSoma = numero01 + numero02 + numero03;

const resultadoSubtracao = numero01 - numero02;

const resultadoMultiplicacao = numero01 * numero02 * numero03;

const resultadoDivisao = numero01 / numero02;

const resultadoDivisaoInteira = Math.floor(resultadoDivisao); // 0

const resultadoRestoDivisao = numero01 % numero02; // 5

const resultadoPotencia = Math.pow(numero01, 2); // 25

const resultadoPotencia2 = numero01 ** 2; // 25

const resultadoRaizQuadrada = Math.sqrt(numero01); // 2.23606797749979

const resultadoRaizCubica = Math.cbrt(numero01); // 1.7099759474226504



console.log(`O resultado da somatória dos números ${numero01} + ${numero02} + ${numero03} é: ${resultadoSoma}`); // 30

console.log(`O resultado da subtração dos números ${numero01} - ${numero02} é: ${numero01 - numero02}`); // -5

console.log(`O resultado da multiplicação dos números ${numero01} * ${numero02} é: ${numero01 * numero02}`); // 50

console.log(`O resultado da divisão dos números ${numero01} / ${numero02} é: ${resultadoDivisao}`); // 0.5

console.log(`O resultado da divisão inteira dos números ${numero01} / ${numero02} é: ${resultadoDivisaoInteira}`); // 0

console.log(`O resultado do resto da divisão dos números ${numero01} % ${numero02} é: ${resultadoRestoDivisao}`); // 5

console.log(`O resultado da potência dos números ${numero01} ^ 2 é: ${resultadoPotencia}`); // 25

console.log(`O resultado da potência dos números ${numero01} ** 2 é: ${resultadoPotencia2}`); // 25

console.log(`O resultado da raiz quadrada dos números ${numero01} é: ${resultadoRaizQuadrada}`); // 2.23606797749979

console.log(`O resultado da raiz cúbica dos números ${numero01} é: ${resultadoRaizCubica}`); // 1.7099759474226504