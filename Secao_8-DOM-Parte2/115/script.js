// ACESSANDO PARAGRAFO
const segundoParagrafo = container.firstElementChild.nextElementSibling.nextElementSibling;
segundoParagrafo.after("Texto adicionado após o segundo parágrafo.");
segundoParagrafo.before("Texto adicionado antes do segundo parágrafo.");
console.log(segundoParagrafo);

const span = document.createElement("span");
span.textContent = "span dinamico";
segundoParagrafo.after(span);
segundoParagrafo.before(span);