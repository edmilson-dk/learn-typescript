/*
Você pode tornar as propriedades somente leitura usando a readonly
palavra - chave. As propriedades somente leitura devem ser inicializadas 
em sua declaração ou no construtor.
*/

class Data {
  readonly check: number;
  constructor(checks: number) {
    this.check = checks;
  }

  getCheck() {
    return this.check;
  }
}

const user = new Data(19937);
user.getCheck();
