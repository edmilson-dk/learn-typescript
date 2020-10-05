/*
Um tipo de união descreve um valor que pode ser um de vários tipos. 
Usamos a barra vertical ( |) para separar cada tipo, 
assim number | string | booleancomo o tipo de valor que pode ser a number,
a stringou a boolean.
*/

function printOrCalc(title: string, item: number |string) {
  if (typeof item === "number") {
    console.log(`${title} -> ${item + item}`);
  } 

  if (typeof item === "string") {

  }
}

