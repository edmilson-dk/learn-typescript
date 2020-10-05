/*
O protectedmodificador atua de forma muito semelhante ao private modificador,
com a exceção de que os membros declarados protectedtambém podem ser 
acessados as classes derivadas.

Tamben é possivel ter constructors protected que impendem que uma classe seja instanciada
porem pode ser extendida para outra classe
*/

class Animal {
  protected name;
  protected constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  getName() {
    console.log(`The name of my cat is ${this.name}`);
  }
}

const cat = new Cat('Rex');
cat.getName();
