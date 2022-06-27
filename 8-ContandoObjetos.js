/* Você receberá um array de objetos representando dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de codificação que você está organizando.

Sua tarefa é retornar um objeto que inclui a contagem de cada linguagem de codificação representada no meetup .

Por exemplo, dado o seguinte array de entrada: */

const list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C'
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript'
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby'
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'Ruby'
  }
]

// Sua função deve retornar o seguinte objeto:

const obj = { C: 2, JavaScript: 1, Ruby: 1 }

// Escreva sua função abaixo:

const countLanguages1 = (arr) => {
  let count = {};
  arr.forEach((item) => count[item.language] = (count[item.language] || 0) + 1);
  return count;
}

const countLanguages = (arr) => arr.reduce((r, v) => ({...r, [v.language]: (r[v.language] || 0) + 1 }), 0);
