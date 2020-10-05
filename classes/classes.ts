/*
Orientação a objetos com TypeScript
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

  displayUser() {
      console.log(`Name: ${this.name}\nAge: ${this.age}`);
  }

  setNewName(newName: string) {
    this.name = newName;
  }
}

const User = new Person('Alex', 16, 'Wg', 'Bahia');

User.displayUser();
User.setNewName('Lucas');
User.displayUser();

