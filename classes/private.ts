/*
O TypeScript também tem sua própria maneira de declarar um membro
como marcado private, ele não pode ser acessado de fora da classe 
que o contém. Por exemplo:
*/

class Animal {
  private name;
  constructor(name: string) {
    this.name = name;
  }
}

const animal = new Animal('Rex');

// animal.name; error 
