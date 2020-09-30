/*
Podemos precisar descrever o tipo de variáveis que não sabemos quando 
estamos escrevendo um aplicativo. Esses valores podem vir de conteúdo dinâmico - 
por exemplo, do usuário - ou podemos aceitar intencionalmente todos os valores em nossa API. 
Nesses casos, queremos fornecer um tipo que diga ao compilador e aos leitores 
futuros que essa variável pode ser qualquer coisa, então fornecemos o unknowntipo a ela .
*/

let desconhecido: unknown = 3;
desconhecido = 'Hello world';

console.log(desconhecido);

