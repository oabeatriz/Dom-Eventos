window.addEventListener('DOMContentLoaded', function() { // Neste exemplo, utilizamos o evento DOMContentLoaded para garantir que o código JavaScript só 
    //seja executado após o carregamento completo da página
    // Seleciona todas as células da tabela com a classe "preco"
    var precos = document.querySelectorAll('.preco');  // Seleciona todas as células da tabela com a classe "preco"
  
    var soma = 0; // Inicializa a variável soma com o valor zero. Essa variável será usada para armazenar a soma dos preços.
    for (var i = 0; i < precos.length; i++) {
      // Obtém o preço atual como um número e adiciona à soma
      soma += parseFloat(precos[i].textContent);
    }
  
    // Exibe o valor da soma no elemento <p> com o id "total-preco"
    var totalPrecoElemento = document.getElementById('total-preco');
    totalPrecoElemento.textContent = 'Total: R$ ' + soma.toFixed(2);
  });