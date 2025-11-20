// HTMLCollection vs NodeList

// O NodeList é estático, ou seja, não muda após a sua criação. 
// Já o HTMLCollection é dinâmico, ou seja, reflete as mudanças no DOM.


const nodelist = document.querySelectorAll('#list li'); // NodeList
const htmlcollection = document.getElementById('list').getElementsByTagName('li'); // HTMLCollection

console.log('NodeList:', nodelist);
console.log('HTMLCollection:', htmlcollection);

document.querySelector('#list').innerHTML += '<li>Item 6</li>';

console.log('NodeList:', nodelist);
console.log('HTMLCollection:', htmlcollection);

document.getElementById('list').innerHTML += '<li>Item 7</li>';

console.log('NodeList:', nodelist);
console.log('HTMLCollection:', htmlcollection);
