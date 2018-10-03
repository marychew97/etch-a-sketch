let container = document.querySelector('.container');
let width = 480;
let height = 480;

let num = prompt("Enter any number for grid dimensions.");

// function createGrid(num){
    
//     for(var row=0; row<num; row++){
//         var row = document.createElement('div');
//         row.classList.add('row');
//         for(var col=1; col<=num; col++){
//             var cell = document.createElement('div');
//             cell.classList.add('cell');
//             cell.style.width = `${480/num}px`;
//             cell.style.height = `${480/num}px`;
//             row.appendChild(cell);
//         }
//         container.appendChild(row);
//     }
//     // cell.width(480/num);
//     // cell.height(480/num);
// }

// createGrid(16);

function createGrid(num){
    //var body = document.querySelector('body');
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    for(var i=0; i<num; i++){
        var tr = document.createElement('tr');
        tableBody.appendChild(tr);
        for(var j=0; j<num; j++){
            var td = document.createElement('td');
            td.style.width = `${width/num}px`;
            td.style.height = `${height/num}px`;
            tr.appendChild(td);
        }
        container.appendChild(table);
    }
}

createGrid(num);