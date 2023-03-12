const botao = document.querySelectorAll(".botao");
const imagem = document.querySelectorAll(".imagem");
let index = 0;
let intervalo = setInterval(automatico, 5000);

function PassarImagem(novoindex) {
    botao[index].classList.remove('selecionado');
    botao[novoindex].classList.add('selecionado');
    imagem[index].classList.remove("ativa");
    imagem[novoindex].classList.add("ativa");
    index = novoindex;
}

botao.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        clearInterval(intervalo);
        PassarImagem(i);
        intervalo = setInterval(automatico, 5000);
    });
});

function automatico() {
    let novoIndex = (index + 1) % imagem.length;
    PassarImagem(novoIndex);
}
