/*
um tipo que representa instâncias da classe e uma função construtora. 
Como as classes criam tipos, você pode usá-los nos mesmos lugares em que seria capaz de 
usar as interfaces.
*/

class Name {
  firstName: string;
  lastName: string;
}

interface User extends Name {
  age: number;
}

const user: User = { 
  firstName: 'Alex', 
  lastName: 'Jesus', 
  age: 16,
};

