function buildGrid(unit) {
    var gridContainer = document.getElementById('gridContainer');

    if (document.getElementById('grid')) {
        container = document.getElementById('grid');
        console.log(container)
        gridContainer.removeChild(container);
    }

    container = document.createElement('div');
    container.setAttribute('id', 'grid');
    gridContainer.appendChild(container);


    let gridSize = unit * unit;

    if (grid = document.getElementById('grid').hasChildNodes() === true ) {
        let items = document.getElementById('grid');
        while (items.firstChild) {
            items.removeChild(items.lastChild);
        }
    }

    while (gridSize > 0) {
        grid = document.getElementById('grid');
        gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'gridItem');
        grid.appendChild(gridItem);
        gridSize --;
    }

    containerCont = document.getElementById("grid");
    containerCont.style.gridTemplateColumns = `repeat(${unit}, auto)`;
    containerCont.style.gridTemplateRows = `repeat(${unit}, auto)`;

    cellFill()  
}

function cellFill() {
    var cell = document.querySelectorAll('.gridItem');
    var color = document.getElementById('color');

    cell.forEach((item) => {
        item.addEventListener('mouseover', function(e) {
            if (document.getElementById('pen').classList.contains('active')) {
                e.target.style.backgroundColor = color.value;
            } else if (document.getElementById('eraser').classList.contains('active')) {
                e.target.style.backgroundColor = "white";
            }
        });
    });
}

function clearGrid() {
    buildGrid(document.getElementById('slider').value);
}

function updateSize(unit) {
    document.getElementById('size').innerHTML = unit + " x " + unit
    buildGrid(unit)    
}

// Starting Grid
buildGrid(16)

// Toggle tool selection between actives
document.addEventListener('click', function(e){
    if (e.target.id === 'pen' ) {
        document.getElementById('pen').classList.add("active")
        document.getElementById('eraser').classList.remove("active")
    } else if (e.target.id === 'eraser') {
        document.getElementById('eraser').classList.add("active")
        document.getElementById('pen').classList.remove("active")
    }
})