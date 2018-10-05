let main = document.querySelector('#main');
let container = document.querySelector('.container');

let body = document.querySelector('body');
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('change').addEventListener('click', clearGrid);

let oriNum = 16;


function createGrid(num){
    let grid = document.createElement('div');
    grid.setAttribute("style", `grid-template: repeat(${num},1fr)/repeat(${num},1fr)`);
    grid.classList.add('grid');
    for (let i = 0; i < num ** 2; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = getRandomColor();
        });
        grid.appendChild(cell);
    }
    container.appendChild(grid);

    // Grid in a table
    // var table = document.createElement('table');
    // var tableBody = document.createElement('tbody');
    // table.appendChild(tableBody);
    // for(var i=0; i<num; i++){
    //     var tr = document.createElement('tr');
    //     tableBody.appendChild(tr);
    //     for(var j=0; j<num; j++){
    //         var td = document.createElement('td');
    //         td.classList.add('cell');
    //         td.addEventListener('mouseover', function(e){
    //             e.target.style.backgroundColor = getRandomColor();
    //         });
    //         td.style.width = `${480/num}px`;
    //         td.style.height = `${480/num}px`;
    //         tr.appendChild(td);
    //     }
    //     container.appendChild(table);
    // }
}

function checkNum(num){
    if(isNaN(num) || num > 64 || num < 1){
        num = prompt("Enter any number less than 64 and greater than 1 for grid dimensions.");
        createGrid(num);
    } else{
        createGrid(num);
    }
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(var i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function clearGrid(){
    let num = prompt("Enter any number for grid dimensions.");
    checkNum(num);

    var grid = document.querySelector('.grid');
    container.removeChild(grid);
}

function reset(){
    var cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#fff';
    });
}

createGrid(oriNum);
