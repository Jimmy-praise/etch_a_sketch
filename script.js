const container = document.querySelector('.container');

function createDiv() {
    const div = document.createElement('div');
    divLength = (1100 / 16) - 2 + 'px';

    div.style.cssText = 
    `width: ${divLength};
    height: ${divLength};
    border: 1px solid black;
    border-radius: 2px`;

    div.addEventListener('mouseover', () => {
        div.style.background = 'red';
    });
    div.addEventListener('dragover', () => {
        div.style.background = 'white'
    });
    div.addEventListener('click', () => {
        div.style.background = 'white'
    });

    container.appendChild(div);

}

for (let i = 0; i < 256; i++) {
    createDiv()
}