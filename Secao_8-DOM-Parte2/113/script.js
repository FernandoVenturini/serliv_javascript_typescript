// CreateDOM
const title = document.createElement('h1'); // Cria um elemento h1
console.log(title);

const atributo = document.createAttribute('id'); // Cria um atributo id
atributo.value = "Title1"; // Define o valor do atributo
console.log(atributo);
title.setAttributeNode(atributo); // Adiciona o atributo ao elemento

title.setAttribute('class', 'titleClass'); // Outra forma de adicionar atributos

const text = document.createTextNode('Manipulação de DOM com JavaScript'); // Cria um nó de texto
title.appendChild(text);
text.textContent = 'Manipulação de DOM com JavaScript - Atualizado'; // Altera o conteúdo do nó de texto

document.body.appendChild(title); // Adiciona o elemento ao body do documento