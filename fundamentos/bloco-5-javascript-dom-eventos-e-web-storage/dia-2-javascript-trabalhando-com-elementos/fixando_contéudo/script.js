// Acesse o elemento elementoOndeVoceEsta .
let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
console.log(ondeVoceEsta)

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let acessePai = ondeVoceEsta.parentElement;
acessePai.style.color = 'blue';
console.log(acessePai);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerHTML = "Tryber";
console.log(primeiroFilhoDoFilho);

// Acesse o primeiroFilho a partir de pai .
let primeiroFilho = acessePai.firstElementChild;
console.log(primeiroFilho);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let primeiroFilho2 = ondeVoceEsta.previousElementSibling;
console.log(primeiroFilho2);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let textAtencao = ondeVoceEsta.nextSibling;
console.log(textAtencao);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = ondeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

// Agora acesse o terceiroFilho a partir de pai .
let terceiroFilho2 = acessePai.lastElementChild.previousElementSibling;
console.log(terceiroFilho2);

// Crie um irmão para elementoOndeVoceEsta .
let acessePai2 = document.getElementById('pai');
let elementIrmao = document.createElement('section');
elementIrmao.id = 'elementoOndeVoceEsta2';
acessePai2.appendChild(elementIrmao);
console.log(elementIrmao.parentNode);

// Crie um filho para elementoOndeVoceEsta .
let ondeVoceEsta3 = document.getElementById('elementoOndeVoceEsta');
let filhoOndeVoceEsta = document.createElement('section');
filhoOndeVoceEsta.id = 'filhoOndeVoceEsta';
ondeVoceEsta3.appendChild(filhoOndeVoceEsta);
console.log(filhoOndeVoceEsta.parentNode);

// Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilho1 = document.getElementById('primeiroFilhoDoFilho');
let primeiroFilhoDoFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilhoDoFilho.id = 'primeiroFilhoDoFilhoDoFilho';
primeiroFilhoDoFilho1.appendChild(primeiroFilhoDoFilhoDoFilho);
console.log(primeiroFilhoDoFilhoDoFilho.parentNode);

// A partir desse filho criado, acesse terceiroFilho .
let primeiroFilhoDo1 = primeiroFilhoDoFilhoDoFilho.parentElement.parentElement.nextSibling.nextSibling;
console.log(primeiroFilhoDo1);

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();
