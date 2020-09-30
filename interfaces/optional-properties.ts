/*
Nem todas as propriedades de uma interface podem ser necessárias. Alguns existem sob certas 
condições ou podem nem mesmo existir. Essas propriedades opcionais são populares ao criar 
padrões como “pacotes de opções”, onde você passa um objeto para uma função que tem apenas 
algumas propriedades preenchidas.

As interfaces com propriedades opcionais são escritas de forma semelhante a outras interfaces, 
com cada propriedade opcional denotada por um ?no final do nome da propriedade na declaração.
*/

interface dataUser {
  name: string;
  age: number;
  state?: string; // opcional
  sexy?: string; // opcional
}

function displayData(data: dataUser): { name: string, age: number } {
  if (data.state && data.sexy) {
    console.log(data.state, data.sexy);
  }
  const newData = { name: data.name, age: data.age };

  return newData;
}

const data: dataUser = {
  name: 'alex',
  age: 16,
  state: 'BH',
  sexy: 'M'
}

displayData(data);

