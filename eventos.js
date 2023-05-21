var b2 = document.getElementById("btn2");
b2.onclick = function() { alert("função addEventListener"); };

var b3 = document.getElementById("btn3");
b3.addEventListener("click", function() { alert("addEventListener"); }, false)

var area = window.document.getElementById('div1');
// ou: 
// area.addEventListener('click', clicar)
// area.addEventListener('mouseeneter', entrar)
// area.addEventListener('mouseout', sair)
   function clicar() {
    area.innerText = 'ficou'
    area.style.background = 'Red'
   }

   function entrar() {
    area.innerText = 'entrou'
    area.style.background = 'Blue'
   }


   function sair() {
    area.innerText = 'saiu'
    area.style.background = 'Yellow'
   }


   ///

 