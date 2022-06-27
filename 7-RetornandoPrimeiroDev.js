/* Você receberá um array de objetos representando dados sobre desenvolvedores que se inscreveram para participar do próximo encontro de codificação que você está organizando. A lista é ordenada de acordo com quem se inscreveu primeiro.

Sua tarefa é retornar uma das seguintes strings:

< firstName here >, < country here > do primeiro desenvolvedor Python que se inscreveu; ou
"There will be no Python developers" se nenhum desenvolvedor Python se inscreveu.
Por exemplo, dado o seguinte array de entrada: */

const list1 = [
  {
    firstName: 'Mark',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript'
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 30,
    language: 'Python'
  },
  {
    firstName: 'Emma',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Europe',
    age: 19,
    language: 'Clojure'
  }
]

// Sua função deve retornar Victoria, Puerto Rico.

// Escreva seu código abaixo:

const getFirstPython = (arr) => {
  for (let item of arr) {
    if (item.language === 'Python') return `${item.firstName}, ${item.country}`; 
  }
  return 'There will be no Python developers';
}

const getFirstPython1 = (arr) => {
  let findDev = arr.find((dev) => dev.language === 'Python');
  
  return findDev ? `${findDev.firstName}, ${findDev.country}` : 'There will be no Python developers';
}
 

