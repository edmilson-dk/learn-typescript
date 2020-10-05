/*
Os tipos de intersecção estão intimamente relacionados aos tipos 
de união, mas são usados de maneira muito diferente. Um tipo de 
interseção combina vários tipos em um. Isso permite adicionar 
tipos existentes para obter um único tipo com todos os recursos
de que você precisa. 
Por exemplo, Person & Serializable & Loggableé um tipo que é todo 
Person e Serializable e Loggable . 
Isso significa que um objeto desse tipo terá todos os membros
de todos os três tipos.
*/

interface Errors {
  sucess: boolean;
  error?: { message: string };
}

interface Test {
  active?: boolean;
}

type Run = Errors & Test;

function response(data: Run) {
  if (data.sucess) {
    data.active = false;
    return "Sucesso"
  } else {
    data.active = true;
    return data.error.message
  }
}

let g: Run = {
  sucess: true,
  error: {
    message: 'Error',
  },
  active: true,
}

const re = response(g);

