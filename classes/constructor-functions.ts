/*
Quando você declara uma classe no TypeScript, na verdade está 
criando várias declarações ao mesmo tempo. O primeiro é o tipo 
da instância da classe.

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet()); // "Hello, world"Tentar
*/

/*
Aqui, quando dizemos let greeter: Greeter, estamos usando Greeter
como o tipo de instâncias da classe Greeter. Isso é quase uma 
segunda natureza para programadores de outras linguagens 
orientadas a objetos.

Também estamos criando outro valor que chamamos de função
construtora . Esta é a função que é chamada quando newcarregamos 
instâncias da classe. Para ver como é na prática, vamos dar uma 
olhada no JavaScript criado pelo exemplo acima:

let Greeter = (function () {
  function Greeter(message) {
    this.greeting = message;
  }

  Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
  };

  return Greeter;
})();

let greeter;
greeter = new Greeter("world");
console.log(greeter.greet()); // "Hello, world"Tentar
*/

/*
Aqui, let Greeterserá atribuída a função de construtor. 
Quando chamamos newe executamos esta função, obtemos uma instância
da classe. A função construtora também contém todos os membros 
estáticos da classe. Outra maneira de pensar em cada classe é que 
existe um lado da instância e um lado estático .

Vamos modificar um pouco o exemplo para mostrar essa diferença:
*/

class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet()); // "Hello, there"

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"Tentar

/*Neste exemplo, greeter1funciona de forma semelhante ao anterior. Instanciamos a Greeterclasse e usamos este objeto. Isso já vimos antes.
Em seguida, usamos a classe diretamente. Aqui criamos uma nova 
variável chamada greeterMaker. Essa variável manterá a própria 
classe ou, dito de outra forma, sua função de construtor. 
Aqui usamos typeof Greeter, isto é, “dê-me o tipo da Greeter 
própria classe” em vez do tipo de instância. Ou, mais precisamente,
“dê-me o tipo de símbolo chamado Greeter”, que é o tipo da função 
construtora. Este tipo conterá todos os membros estáticos de 
Greeter junto com o construtor que cria instâncias da Greeter
classe. Mostramos isso usando newon greeterMaker, criando novas 
instâncias Greetere invocando-as como antes.
*/
