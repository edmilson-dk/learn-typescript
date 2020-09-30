/*
Um dos usos mais comuns de interfaces em linguagens como C # e Java, o de impor 
explicitamente que uma classe atenda a um contrato específico, também é possível no TypeScript.
Você também pode descrever métodos em uma interface que são implementados na classe, como fazemos 
setTimeno exemplo abaixo:
*/

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

