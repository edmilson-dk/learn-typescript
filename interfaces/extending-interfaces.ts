/*
Assim como as classes, as interfaces podem se estender. Isso permite que você copie os 
membros de uma interface para outra, o que lhe dá mais flexibilidade em como separar suas
interfaces em componentes reutilizáveis.
*/

interface Colors {
  color: string;
}

interface CounterColors extends Colors {
  counter: number;
}

const pallete = {} as CounterColors;

pallete.color = 'red';
pallete.counter = 1;

console.log(pallete);

