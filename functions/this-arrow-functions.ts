/*
Em JavaScript, thisé uma variável definida quando uma função é chamada.
Isso o torna um recurso muito poderoso e flexível, mas tem o custo de 
sempre ter que saber sobre o contexto no qual uma função está sendo 
executada. Isso é notoriamente confuso, especialmente ao retornar 
uma função ou passar uma função como um argumento.
*/

let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

