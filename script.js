const container = document.querySelector('.container');

function createDiv() {
    const div = document.createElement('div');
    divLength = (1100 / 16) - 6 + 'px';

    div.style.cssText = `width: ${divLength};
    height: ${divLength};
    border: 1px solid black;
    margin: 2px`
    container.appendChild(div);

}

for (let i = 0; i < 256; i++) {
    createDiv()
}