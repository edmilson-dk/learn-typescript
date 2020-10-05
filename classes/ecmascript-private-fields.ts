/*
O Es2019 introduziu campos privados para classes no Javascript
que são criados antes de qualquer constructor de uma classe
e para serem acessados dentro da class se usa o # para acessar
*/

class Animal {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}

//new Animal("Cat").#name; error o campo #name é privado

