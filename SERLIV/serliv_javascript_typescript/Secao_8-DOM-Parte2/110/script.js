// Navegar na arvore do DOM
console.log(document.body); // Acessa o corpo do documento
console.log(document.parentElement); // Acessa o elemento pai do documento (null)
console.log(document.parentNode); // Acessa o nó pai do documento (null)


const html = document.body.parentElement; // Acessa o elemento <html>
console.log(html.parentElement); // Acessa o elemento pai do <html> (null)