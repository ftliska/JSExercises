/* Você receberá um array de objetos representando dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de codificação que você está organizando.

Sua tarefa é retornar um array onde cada objeto terá uma nova propriedade 'greeting' com o seguinte valor de string:

Hi < firstName here >, what do you like the most about < language here >?

Por exemplo, dado o seguinte array de entrada:

 */

const list1 = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java'
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python'
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby'
  }
]
// sua função deve retornar o seguinte array:

;[
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  }
]
// Sua Resposta aqui:

const greetDevelopers = (arr) => {
  const newArr = [];
  arr.forEach(obj => {
    obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
    newArr.push(obj);
  })
  return newArr;
}

console.log(greetDevelopers(list1));
