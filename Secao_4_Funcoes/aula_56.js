/* Funcoes em JS: Sao tipos de objetos com a incrivel capacidade de serem invocados.
    * Podem ser literais;
    * Em alguns casos ocorre o hosting;
    * Sao objetos de primeira classe;
    * Pode ser IIFE (Immediately Invoked Function Expression);
    * Podem ser propriedades internas como argumentos e name;
*/

// hoisting:
function teste() {
    console.log('Function 1!');
}
teste();

const teste2 = function teste2() {
    console.log('Function 2!');
}
teste2();

function teste3() {
    console.log('Function 3!');
}
teste3();