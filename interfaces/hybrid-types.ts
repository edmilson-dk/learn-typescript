/*
Como mencionamos anteriormente, as interfaces podem descrever os tipos avançados 
presentes no JavaScript do mundo real. Devido à natureza dinâmica e flexível do JavaScript, 
você pode ocasionalmente encontrar um objeto que funciona como uma combinação de alguns dos
tipos descritos acima.
*/

interface simulateClass {
  (size: number): number;
  idUser: number;
  resetId(): void;
}

function getClass(): simulateClass {
  let classe = function(size: number) {
    return size += 1;
  } as simulateClass;
  
  classe.idUser = 1;
  classe.resetId = function() { console.log(classe.idUser); }
  return classe;
}

const newClass = getClass();

newClass(10);
newClass.idUser = 2;
newClass.resetId();

