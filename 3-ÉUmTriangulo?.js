/* 
Implemente uma função que aceite 3 valores inteiros a, b, c. A função deve retornar true se um triângulo puder ser construído com os lados de determinado comprimento e false em qualquer outro caso.

Só irá existir um triângulo se, somente se, os seus lados obedeceram à seguinte regra: 
um de seus lados deve ser maior que o valor absoluto (módulo) da diferença dos outros dois lados e menor que a soma dos outros dois lados.
| a - c | < b < a + c
| b - c | < a < b + c
| a - b | < c < a + b

(Nesse caso, todos os triângulos devem ter superfície maior que 0 para serem aceitos).
*/

function isTriangle(a, b, c) {
  let ladoA = Math.abs(b + c);
  let ladoB = Math.abs(a + c);
  let ladoC = Math.abs(a + b);
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (ladoA > a) {
    return true;
  } 
  if (ladoB > b) {
    return true;
  } 
  if (ladoC > c) {
    return true;
  }
  return false;
}

isTriangle(4, 1, 9)