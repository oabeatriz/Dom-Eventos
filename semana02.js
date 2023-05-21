const animals = document.getElementById("especies");
const container = document.getElementById("container");
const nome = document.getElementById("nome-animal");

especies.addEventListener("change", exibirImagem);




const cachorros = [
  { nome: 'Thor', imagem: 'dog1.jpg' },
  { nome: 'Juca', imagem: 'dog2.jpg' },
  { nome: 'Teo', imagem: 'dog3.jpg' },
  { nome: 'Barry', imagem: 'dog4.jpg' }
];

const gatos = [
  { nome: 'Lua', imagem: 'cat1.jpg' },
  { nome: 'Diva', imagem: 'cat2.jpg' },
  { nome: 'Lindy', imagem: 'cat3.jpg' },
  { nome: 'Vivi', imagem: 'cat4.jpg' }
];

function exibirImagem() {
  limparDivContainer();
  let especieSelecionada = animals.value;
  let especies = [];

  if (especieSelecionada === 'dog') {
    especies = cachorros;
  } else if (especieSelecionada === 'cat') {
    especies = gatos;
  }

  for (let imagem of especies) {
    let img = document.createElement("img");
    img.setAttribute("src", "img/" + imagem.imagem);
    img.setAttribute("alt", imagem.nome);
    img.addEventListener("mouseover", function (event) {
      nome.innerText = event.target.alt;
    });
    img.addEventListener("mouseout", function () {
      nome.innerText = "";
    });
    container.appendChild(img);
  }
}

function limparDivContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}


