document.write("Olá, mundo!  ");

document.write(Date());

// var corpo = document.body;
// corpo.style.background = "Blue";   #muda a cor da página para BLUE

// var h1_pais = document.getElementById("uf_pais");
// h1_pais.style.background = "Black";   #muda a cor através do ID

var h1_cidade = document.getElementById("uf_cidade");
h1_cidade.style.background = "White";

document.write("<p> Função InnerText: " + h1_cidade.innerText)

var array_h1 = document.getElementsByTagName("h1");
var h1_brasil = array_h1[0];
h1_brasil.style.color = "Pink";   // altera o style do elemento na posicao 0 (1)

var array_cidade1 = document.getElementsByName("cidade_es1");
var cidades = array_cidade1[0];
cidades.style.borderLeftColor = "Black";

var array_cidade1 = document.getElementsByName("cidade_es1");
var cidades = array_cidade1[1];
cidades.style.borderLeftColor = "Black";

var array_cidade1 = document.getElementsByName("cidade_es1");
var cidades = array_cidade1[2];
cidades.style.borderLeftColor = "Black";

