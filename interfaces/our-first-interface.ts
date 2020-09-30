/*
Um dos princípios básicos do TypeScript é que a verificação de tipo se concentra na 
forma que os valores têm. Isso às vezes é chamado de “digitação de pato” ou “subtipagem estrutural”. 
No TypeScript, as interfaces cumprem a função de nomear esses tipos e são uma maneira poderosa 
de definir contratos dentro do seu código, bem como contratos com código fora do seu projeto.
*/

interface DataUser {
  name: string;
  age: number;
  state: string;
}
function displayDadaUser(data: DataUser) {
  console.log(data.name, data.age, data.state);
}

const dataInitial = { 
  name: 'Alex',
  age: 16,
  state: 'Bahia'
}

displayDadaUser(dataInitial);

