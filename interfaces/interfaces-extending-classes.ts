/*
Quando um tipo de interface estende um tipo de classe, ele herda os membros da classe, mas não 
suas implementações. É como se a interface tivesse declarado todos os membros da classe sem fornecer 
uma implementação. As interfaces herdam até mesmo os membros privados e protegidos de uma classe base. 
Isso significa que, quando você cria uma interface que estende uma classe com membros privados ou 
protegidos, esse tipo de interface só pode ser implementado por essa classe ou uma subclasse dela.

Isso é útil quando você tem uma grande hierarquia de herança, mas deseja especificar que seu código 
funcione apenas com subclasses que possuem certas propriedades. As subclasses não precisam ser 
relacionadas, além de herdar da classe base.
*/

class User {
  private id: number;
}

interface methodUser extends User {
  displayId(): void;
}

class ViewDataUser extends User implements methodUser {
  displayId() {}
}

