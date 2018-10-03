let container = document.querySelector('.container');
document.getElementById('reset').addEventListener('click', reset);

let oriNum = 16;


function createGrid(num){
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    for(var i=0; i<num; i++){
        var tr = document.createElement('tr');
        tableBody.appendChild(tr);
        for(var j=0; j<num; j++){
            var td = document.createElement('td');
            td.classList.add('cell');
            td.addEventListener('mouseover', function(e){
                e.target.style.backgroundColor = getRandomColor();
            });
            td.style.width = `${480/num}px`;
            td.style.height = `${480/num}px`;
            tr.appendChild(td);
        }
        container.appendChild(table);
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
    var table = document.querySelector('table');
    container.removeChild(table);
}

function reset(){
    var td = document.querySelectorAll('td');
    td.forEach(data => {
        data.style.backgroundColor = '#fff';
    });

    let num = prompt("Enter any number for grid dimensions.");
    clearGrid();
    createGrid(num);
}

createGrid(oriNum);
