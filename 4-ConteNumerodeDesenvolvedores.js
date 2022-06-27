/* Você receberá uma matriz de objetos representando dados sobre desenvolvedores que se inscreveram para participar do encontro de codificação que você está organizando pela primeira vez.

Sua tarefa é retornar o número de desenvolvedores JavaScript vindos da Europa .

Por exemplo, dada a seguinte lista: */

const list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'JavaScript'
  },
  {
    firstName: 'Maia',
    lastName: 'S.',
    country: 'Tahiti',
    continent: 'Oceania',
    age: 28,
    language: 'JavaScript'
  },
  {
    firstName: 'Shufen',
    lastName: 'L.',
    country: 'Taiwan',
    continent: 'Asia',
    age: 35,
    language: 'HTML'
  },
  {
    firstName: 'Sumayah',
    lastName: 'M.',
    country: 'Tajikistan',
    continent: 'Asia',
    age: 30,
    language: 'CSS'
  }
]

/* Sua função deve retornar number 1.
Se não houver desenvolvedores de JavaScript da Europa, sua função deve retornar 0. */

const countDevelopers = (list) => {
  return list.filter(item => item.language == 'JavaScript').filter(item => item.continent === 'Europe').length;
}

const countDevelopers2 = (list) => list.filter(item => item.language === 'JavaScript' && item.continent === 'Europe').length;

console.log(countDevelopers2(list1)); 
