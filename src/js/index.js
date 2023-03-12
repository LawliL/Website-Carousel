const botoesCarrossel = document.querySelectorAll(".botao");
const imgCarrossel = document.querySelectorAll(".imagem");
let index = 0;
let intervalo = setInterval(carrosselAutomatico, 5000);

function mudarImagem(novoindex) {
    botoesCarrossel[index].classList.remove('selecionado');
    botoesCarrossel[novoindex].classList.add('selecionado');
    imgCarrossel[index].classList.remove("ativa");
    imgCarrossel[novoindex].classList.add("ativa");
    index = novoindex;
}

botoesCarrossel.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        clearInterval(intervalo);
        mudarImagem(i);
        intervalo = setInterval(carrosselAutomatico, 5000);
    });
});

function carrosselAutomatico() {
    let novoIndex = (index + 1) % imgCarrossel.length;
    mudarImagem(novoIndex);
}
