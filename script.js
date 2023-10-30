document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid-container");
    const rowsInput = document.getElementById("rows");
    const colsInput = document.getElementById("cols");
    const colorPicker = document.getElementById("colorPicker");

    let currentColor = colorPicker.value;

    colorPicker.addEventListener("input", function() {
        currentColor = colorPicker.value;
    });

    function createGrid(rows, cols) {
        gridContainer.innerHTML = "";
        gridContainer.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 50px)`;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const square = document.createElement("div");
                square.className = "square";
                gridContainer.appendChild(square);

                square.addEventListener("click", function() {
                    square.style.backgroundColor = currentColor;
                });
            }
        }
    }

    document.getElementById("colorButton").addEventListener("click", function() {
        const rows = parseInt(rowsInput.value);
        const cols = parseInt(colsInput.value);

        if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
            alert("Invalid number of rows or columns!");
            return;
        }

        createGrid(rows, cols);
    });
});
