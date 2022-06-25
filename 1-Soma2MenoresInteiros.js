/* 
Crie uma função que retorne a soma dos dois números positivos mais baixos, dada uma matriz de no mínimo 4 inteiros positivos. Nenhum número flutuante ou inteiro não positivo será passado.

Por exemplo, quando um array é passado como [19, 5, 42, 2, 77], a saída deve ser 7.
*/


function sumTwoSmallestNumbers(numbers) {
  let ordenados = numbers.sort((a, b) => a - b);
  return ordenados[0] + ordenados[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));