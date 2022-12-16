const grid = document.querySelector('.grid');
const createNewGrid = document.querySelector('#create-new-grid');


function createDiv(numberOfSquaresOnSides) {
    const div = document.createElement('div');
    divLength = (1100 / numberOfSquaresOnSides) - 2 + 'px';

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

    grid.appendChild(div);
}

function createGrid(params) {
    let numberOfSquaresOnSides = parseInt(prompt('How many squares do you want on each side?', '16'));
    if (numberOfSquaresOnSides > 100) {
        alert ('Try again!!! Number must not exceed 100');
    } else {
        let numberOfSqaures = numberOfSquaresOnSides ** 2
        for (let i = 0; i < numberOfSqaures; i++) {
            createDiv(numberOfSquaresOnSides)
        } 
    }
}

createNewGrid.addEventListener('click', () => {
    grid.replaceChildren();
    createGrid();
});
