/*
 Até este ponto, falamos apenas sobre os membros da instância da classe,
 aqueles que aparecem no objeto quando ele é instanciado. 
 Também podemos criar membros estáticos de uma classe, aqueles que são
 visíveis na própria classe em vez de nas instâncias.
 */

class Time {
  static date: object;

  constructor(){}

  static actualDate() {
    Time.date = new Date();
    return Time.date;
  }
}

console.log(Time.actualDate());

