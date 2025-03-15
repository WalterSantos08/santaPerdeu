function showElements(selector) {
    document.querySelectorAll(selector).forEach(element => {
        element.style.opacity = '1';
        element.style.translate = '0';
    });
}

function showUp(selector) {
    document.querySelectorAll(selector).forEach(element => {
        element.style.opacity = '1';
    });
}

function animation() {
    showElements('h1');

    setTimeout(() => showElements('h2'), 300);
    setTimeout(() => showElements('.att1'), 500);
    setTimeout(() => showElements('.att2'), 1000);
    setTimeout(() => showElements('.att3'), 1500);
    setTimeout(() => showElements('.att4'), 2000);
    setTimeout(() => showUp('.up1'), 3000);
    setTimeout(() => showUp('.up2'), 4000);
    setTimeout(() => showUp('.up3'), 5000);
    setTimeout(() => showUp('.up4'), 6000);
    setTimeout(() => showElements('button'), 7000); // Agora afeta todos os botões
}

setTimeout(animation, 100);
