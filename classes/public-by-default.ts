/*
Em nossos exemplos, conseguimos acessar livremente os membros que 
declaramos em nossos programas. Se você estiver familiarizado com
classes em outras línguas, deve ter notado nos exemplos acima que 
não precisamos usar a palavra publicpara fazer isso; por exemplo,
C # requer que cada membro seja explicitamente rotulado publiccomo 
visível. No TypeScript, cada membro é publicpor padrão.
*/

class Person {
  name: string;
  age: number;
  city: string;
  state: string;

  constructor(name: string, age: number, city: string, state: string) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.state = state;
  }

  public displayUser() {
      console.log(`Name: ${this.name}\nAge: ${this.age}`);
  }

  public setNewName(newName: string) {
    this.name = newName;
  }
}

const User = new Person('Alex', 16, 'Wg', 'Bahia');

User.displayUser();
User.setNewName('Lucas');
User.displayUser();

