/*
Os parâmetros de descanso são tratados como um número ilimitado de 
parâmetros opcionais. Ao passar argumentos para um parâmetro rest, 
você pode usar quantos quiser; você pode até passar por nenhum. 
O compilador construirá uma matriz dos argumentos passados com o nome 
dado após as reticências ( ...), permitindo que você os use em sua função.
*/

function names(...names: string[]): void {
  names.forEach(name => {
    console.log(name);
  });
}

names('Alex', 'Sophia', 'Julia', 'Lucas');

