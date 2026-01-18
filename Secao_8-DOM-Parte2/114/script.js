// Cria um novo elemento <h1> na memória (ainda não está no DOM)
const title = document.createElement('h1');

// Cria um novo atributo (ainda não associado a nenhum elemento)
const atributo = document.createAttribute('id');

// Define o valor do atributo como "title1"
atributo.value = "title1";

// Associa o atributo criado ao elemento title
title.setAttributeNode(atributo);

// Adiciona um atributo "title" com valor descritivo
title.setAttribute("title", "title inserido dinamicamente");

// Adiciona estilo CSS inline (cor vermelha)
title.setAttribute("style", "color: red;");

// Cria um nó de texto com conteúdo específico
const text = document.createTextNode("Criar nos no DOM");

// Adiciona o nó de texto como filho do elemento title
title.appendChild(text);

// Sobrescreve todo o conteúdo textual do elemento (incluindo o texto anterior)
title.textContent = "texto inserido com textContent";

// Exibe o elemento title no console para inspeção
console.log(title);

// Método appendChild (comentado) - adiciona um único elemento como último filho
// document.querySelector(".container").appendChild(title);

// Método append (moderno) - adiciona title como último filho do container
document.querySelector(".container").append(title);

// Método append com múltiplos argumentos (adiciona title + texto)
document.querySelector(".container").append(title, " Outro texto");

// Método prepend - adiciona elementos no INÍCIO do container (como primeiros filhos)
document.querySelector(".container").prepend(title);
document.querySelector(".container").prepend(title, "Outro texto");

// Cria um novo elemento <h1> com conteúdo diferente
const title2 = document.createElement("h1");
title2.textContent = "Titulo 2";

// Seleciona a primeira lista não ordenada do documento
const list = document.querySelector("ul");

// Seleciona o container principal
const container = document.querySelector(".container");

// Insere title2 ANTES do elemento list (list deve ser filho de container)
container.insertBefore(title2, list);

// Insere title2 como PRIMEIRO filho do container
container.insertBefore(title2, container.firstChild);

// Tenta selecionar uma sublista (contém erro de seletor - deveria ser "ul ul")
let sublevel = document.querySelector("lu lu"); // ERRO: "lu" não existe, deveria ser "ul ul"
// Corrigindo o seletor:
sublevel = document.querySelector("ul ul");

// Clona toda a sublista (true = clona com todos os filhos)
sublevel = sublevel.cloneNode(true);

// Seleciona o elemento <h2> da página
const h2 = document.querySelector("h2");

// Insere a sublista clonada DEPOIS do elemento h2
// nextElementSibling pega o próximo elemento irmão
container.insertBefore(sublevel, h2.nextElementSibling);