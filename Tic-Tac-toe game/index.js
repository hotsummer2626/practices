const X_Class = 'x';
const Circle_Class = 'circle';
let isCircleBoard = false;
let currentBoardStyle = X_Class;
const cellElements = document.querySelectorAll('.cell');
const boardElement = document.querySelector('[data-board]');
const winningElement = document.querySelector('.winning-message');
const resetButton = document.querySelector('.reset');
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

cellElements.forEach(cell => {
    cell.addEventListener('click', setCell, { once: true });
});

resetButton.addEventListener('click', reset);

function setCell(e) {
    let cell = e.target;
    placeCell(cell, currentBoardStyle);
    if (checkWin()) {
        showResult();
    } else if (checkDraw()) {
        showResult();
    } else {
        shiftTurn();
    }
}

function placeCell(cell, currentClass) {
    cell.classList.add(currentClass);
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index - 1].classList.contains(currentBoardStyle);
        })
    })
}

function checkDraw() {
    return [...cellElements].every(cell => {
        return (cell.classList.contains(Circle_Class) || cell.classList.contains(X_Class));
    })
}

function showResult() {
    winningElement.classList.add('show');
    winningElement.querySelector('.winning-text').innerText =
        checkWin() ? `"${currentBoardStyle}" Wins!!!!` : `Draws`;
}

function shiftTurn() {
    boardElement.classList.remove(currentBoardStyle);
    isCircleBoard = !isCircleBoard;
    currentBoardStyle = isCircleBoard ? Circle_Class : X_Class;
    boardElement.classList.add(currentBoardStyle);
}

function reset() {
    isCircleBoard = false;
    currentBoardStyle = X_Class;
    cellElements.forEach(cell => {
        cell.classList.remove(X_Class);
        cell.classList.remove(Circle_Class);
        cell.addEventListener('click', setCell, { once: true });
    });
    winningElement.classList.remove('show');
}





