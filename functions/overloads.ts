/*
Para que o compilador escolha a verificação de tipo correta, 
ele segue um processo semelhante ao JavaScript subjacente. 
Ele examina a lista de sobrecargas e, procedendo com a primeira sobrecarga
, tenta chamar a função com os parâmetros fornecidos. 
Se encontrar uma correspondência, ele seleciona essa sobrecarga como a 
sobrecarga correta. Por esse motivo, é comum solicitar sobrecargas do 
mais específico para o menos específico.

Observe que a function pickCard(x): anypeça não faz parte da lista de 
sobrecargas, portanto, ela possui apenas duas sobrecargas: uma que pega 
um objeto e outra que pega um número. Chamar pickCardcom qualquer outro 
tipo de parâmetro causaria um erro.
*/

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };

function pickCard(x: any): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
