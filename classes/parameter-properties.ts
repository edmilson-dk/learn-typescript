/*
As propriedades de parâmetro permitem criar e inicializar 
um membro em um lugar
*/

class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}

let dad = new Octopus("Man with the 8 strong legs");
dad.name;

