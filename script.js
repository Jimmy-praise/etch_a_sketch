const grid = document.querySelector('.grid');
const color = document.querySelector('#color-picker');
const singleColorMode = document.querySelector('#single-color-mode');
const multiColorMode = document.querySelector('#multi-color-mode');
const eraser = document.querySelector('#eraser');
const reset = document.querySelector('#reset');
const createNewGrid = document.querySelector('#grid-number');

function createDiv(numberOfSquaresOnSides) {
    const div = document.createElement('div');
    divLength = (650 / numberOfSquaresOnSides) - 2 + 'px';
    div.style.cssText = 
    `width: ${divLength};
    height: ${divLength};
    border: 1px solid black;
    border-radius: 2px`;

    singleColorMode.addEventListener('click', () => {
        div.addEventListener('mouseenter', () => {
            div.style.background = `black`;
        });
    });

    multiColorMode.addEventListener('click', () => {
        div.addEventListener('mouseenter', () => {
            let randomR = Math.random() * 255;
            let randomG = Math.random() * 255;
            let randomB = Math.random() * 255;
            div.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
        });
    });

    eraser.addEventListener('click', () => {
        div.addEventListener('mouseenter', () => {
            div.style.background = 'white';
        });
    });

    reset.addEventListener('click', () => {
            div.style.background = 'white';
    });

    grid.appendChild(div);
}

function createGrid(numberOfSquaresOnSides) {
    if (numberOfSquaresOnSides > 100) {
        alert ('Try again!!! Number must not exceed 100');
    } else if  (numberOfSquaresOnSides < 5) {
        alert ('Try again!!! Number must not be less than 5');
    } else {
        let numberOfSqaures = numberOfSquaresOnSides ** 2
        for (let i = 0; i < numberOfSqaures; i++) {
            createDiv(numberOfSquaresOnSides)
        } 
    }
}

createGrid(16)

createNewGrid.addEventListener('change', () => {
    grid.replaceChildren();
    let numberOfSquaresOnSides = parseInt(createNewGrid.value);
    createGrid(numberOfSquaresOnSides);
});