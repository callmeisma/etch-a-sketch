function buildGrid(unit) {
    if (document.getElementById('gridContainer')) {
        container = document.getElementById('gridContainer');
        document.body.removeChild(container);
    }

    container = document.createElement('div');
    container.setAttribute('id', 'gridContainer');
    document.body.appendChild(container);


    let gridSize = unit * unit;

    if (gridContainer = document.getElementById('gridContainer').hasChildNodes() === true ) {
        let items = document.getElementById('gridContainer');
        while (items.firstChild) {
            items.removeChild(items.lastChild);
        }
    }

    while (gridSize > 0) {
        gridContainer = document.getElementById('gridContainer');
        gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'gridItem');
        gridContainer.appendChild(gridItem);
        gridSize --;
    }

    containerCont = document.getElementById("gridContainer");
    containerCont.style.gridTemplateColumns = `repeat(${unit}, auto)`;
    containerCont.style.gridTemplateRows = `repeat(${unit}, auto)`;
}

document.addEventListener('click', function(e){
    if (e.target.id === 'creator') {
        let input = document.getElementById('input').value;
        buildGrid(input);
    }
    
    cell = document.querySelectorAll('.gridItem');

    cell.forEach((item) => {
        item.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        });
    });
})



