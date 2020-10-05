/*
TypeScript oferece suporte a getters / setters como forma de interceptar 
acessos a um membro de um objeto. Isso oferece uma maneira de ter um 
controle mais refinado sobre como um membro é acessado em cada objeto.
*/

class User {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get userName() {
    return this._name;
  }

  set userName(newName: string) {
    if (newName.length > 3) {
      this._name = name;
    } else {
      console.log('Name is invalid');
    }
  } 
}

const user = new User('Alex');
console.log(user.userName);
user.userName = 'Lucas';
console.log(user.userName);

