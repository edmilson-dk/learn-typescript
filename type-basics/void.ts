/*
voidé um pouco como o oposto de any: a ausência de qualquer tipo. 
Normalmente você pode ver isso como o tipo de retorno de funções que não retornam um valor:
*/

function print(message: any): void {
  console.log(message);
}

print('Hello world');

