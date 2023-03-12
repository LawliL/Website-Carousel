/* 
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

    - passo 2 - dar um jeito de identificar o clique do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior

    - passo 4 - marcar o botão clicado como se estivesse selecionada

    - passo 5 - esconder a imagem de fundo anterior

    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

(function() {
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.carrosel .imagem');
    let intervalo = 6000;
  
    botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {

            desativarBotaoSelecionado();
  
            selecionarBotaoCarrosel(botao);
  
            esconderImagemAtiva();
  
            mostrarImagemDeFundo(indice);
        })
    })
  
    function mostrarImagemDeFundo(indice) {
        imagens[indice].classList.add('ativa');
    }
  
    function selecionarBotaoCarrosel(botao) {
        botao.classList.add('selecionado');
    }
  
    function esconderImagemAtiva() {
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
    }
  
    function desativarBotaoSelecionado() {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
    }
  
    function passarImagem() {
      let imagemAtiva = document.querySelector('.carrossel .imagem.ativa');
      let proximaImagem = imagemAtiva.nextElementSibling;
  
      if (!proximaImagem) {
        proximaImagem = document.querySelector('.carrossel .imagem');
      }
  
      imagemAtiva.classList.remove('ativa');
      proximaImagem.classList.add('ativa');
    }
  
    setInterval(passarImagem, intervalo);
  })();
  
  


  
  
  
