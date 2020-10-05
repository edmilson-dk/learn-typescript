/*
As classes abstratas são classes básicas das quais outras classes podem ser 
derivadas. Eles não podem ser instanciados diretamente. Ao contrário de uma 
interface, uma classe abstrata pode conter detalhes de implementação para 
seus membros. A abstractpalavra-chave é usada para definir classes abstratas,
bem como métodos abstratos dentro de uma classe abstrata.

Métodos dentro de uma classe abstrata que são marcados como abstratos não 
contêm uma implementação e devem ser implementados em classes derivadas. Os
métodos abstratos compartilham uma sintaxe semelhante aos métodos de interface.
Ambos definem a assinatura de um método sem incluir um corpo de método. 
No entanto, os métodos abstratos devem incluir a abstractpalavra - chave e
podem opcionalmente incluir modificadores de acesso.
*/

abstract class Animal {
  constructor(public name: string) {}

  printName(): string {
    return this.name;
  }

  abstract nameLength(): number;
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  nameLength(): number {
    return this.name.length;
  }

  auau(): void {
    console.log('Auau auau...');
  }
}

let dog: Animal;
dog = new Dog('Rex');
dog.printName();
dog.nameLength();

// dog.auau(); error porque este metodo não esta definido na class tipo que é a Animal

