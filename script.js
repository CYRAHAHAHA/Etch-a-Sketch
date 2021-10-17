const grid = document.querySelector('#maingrid')
const resetBtn = document.querySelector('#reset')
let gridsize = 0;
resetBtn.onclick = () => reloadGrid();

function random256(){
    let number = Math.random()*255;
    return number;
}

function random1(){
    let number1 = ((Math.ceil(Math.random()*10))/10);
    return number1;
}   


function gridCreate(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i=1; i<=size*size; i++){
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', function(e){
                e.target.style.backgroundColor =
                `rgba(${random256()}, ${random256()}, 255, ${random1()})`;
        });
        grid.appendChild(gridElement);
    }
}

function reloadGrid(){
    gridsize = 0;
    while(Math.round(gridsize <= 0 || gridsize > 100)){
    gridsize = prompt("Enter a number to indicate number of rows and columns! (1-50)");
    }
    grid.innerHTML = "";
    gridCreate(gridsize);
}

//reloadGrid()
