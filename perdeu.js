function showElement(selector) {
    document.querySelector(selector).style.opacity = '1';
    document.querySelector(selector).style.translate = '0';
}

function showUp(selector) {
    document.querySelector(selector).style.opacity = '1';
}

function animation() {
    showElement('h1');

    setTimeout(() => showElement('h2'), 300);
    setTimeout(() => showElement('.att1'), 500);
    setTimeout(() => showElement('.att2'), 1000);
    setTimeout(() => showElement('.att3'), 1500);
    setTimeout(() => showElement('.att4'), 2000);
    setTimeout(() => showUp('.up1'), 3000);
    setTimeout(() => showUp('.up2'), 4000);
    setTimeout(() => showUp('.up3'), 5000);
    setTimeout(() => showUp('.up4'), 6000);
    setTimeout(() => showElement('button'), 7000);
}

setTimeout(animation, 100);
