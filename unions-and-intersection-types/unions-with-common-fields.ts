/*
Se tivermos um valor que é um tipo de união, só podemos acessar 
membros que são comuns a todos os tipos da união.
*/

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// error pet.swim()
