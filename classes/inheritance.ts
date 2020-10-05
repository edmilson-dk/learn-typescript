/*
No TypeScript, podemos usar padrões orientados a objetos comuns.
Um dos padrões mais fundamentais na programação baseada em classe é ser 
capaz de estender classes existentes para criar novas usando herança.
*/

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  welcome() {
    console.log(`Hello mr ${this.name}`);
  }
}

class Man extends Person {
  constructor(theName: string, theAge: number) {
    super(theName, theAge);
  }

  displayAge() {
    console.log(`Hello my name is ${this.name}`);
  }
}

class Woman extends Person {
  constructor(theName: string, theAge: number) {
    super(theName, theAge);
  }
  
  welcome() {
    console.log(`Hello lady ${this.name}`);
    super.welcome();
  }
}

const Maria = new Woman('Maria', 34);
const Joao = new Man('Joao', 35);

Maria.welcome();
Joao.welcome();
