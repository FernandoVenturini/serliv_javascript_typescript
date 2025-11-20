// firstChild e lastChild
const link = document.querySelector('a');
console.log(link.firstChild); // Nó de texto

const lista = document.querySelector('ul');
console.log(lista.lastChild); // Nó de texto (espaço em branco)

console.log(lista.lastElementChild.hasChildNodes); // true