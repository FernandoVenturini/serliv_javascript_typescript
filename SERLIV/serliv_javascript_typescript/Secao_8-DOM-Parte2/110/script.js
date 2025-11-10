// Navegar na arvore do DOM
console.log(document.body); // Acessa o corpo do documento
console.log(document.parentElement); // Acessa o elemento pai do documento (null)
console.log(document.parentNode); // Acessa o nó pai do documento (null)


const html = document.body.parentElement; // Acessa o elemento <html>
console.log(html.parentElement); // Acessa o elemento pai do <html> (null)

const h2 = document.querySelector('h2'); // Seleciona o primeiro elemento <h2>
h2.style.backgroundColor = 'lightblue'; // Altera o estilo do <h2>
console.log(h2.nextElementSibling); // Acessa o elemento pai do <h2>
console.log(h2.previousElementSibling); // Acessa o elemento irmão anterior do <h2>