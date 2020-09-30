/*
Algumas propriedades só devem ser modificáveis quando um objeto é criado pela primeira vez.
Você pode especificar isso colocando readonlyantes do nome da propriedade:
*/

interface Cores {
  readonly primary: string;
  readonly second: string;
}

const cores: Cores = { primary: '#fff', second: '#f0f'};

// cores.primary = '#000' error

console.log(cores);

