const botao = document.querySelector('#neg');

botao.addEventListener("mouseover", function () {
    let moveX = (Math.random() * 801 - 400); // Valor entre -400 e 400 (eixo X)
    let moveY = (Math.random() * 401 - 400); // Valor entre -400 e 0 (eixo Y)

    botao.style.transform = `translate(${moveX}px, ${moveY}px)`; // Move o botão aleatoriamente
});
