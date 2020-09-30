/*
Em algumas situações, nem todas as informações de tipo estão disponíveis 
ou sua declaração exigiria um esforço inadequado. Isso pode ocorrer para valores 
de código que foi escrito sem TypeScript ou uma biblioteca de terceiros. Nesses casos, 
podemos desejar cancelar a verificação de tipo. Para fazer isso, rotulamos esses valores com o anytipo:
*/

let qualquer: any = 0;
qualquer = 'string';

console.log(qualquer);

