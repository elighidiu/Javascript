/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // for(let i=1; i<=10; i++){
    //     for(let j=1; j<=10; j++){
    //     let result =i*j; 
    //     console.log(parseInt(result));
    //     }   
    // }

    let target = document.getElementById("target");

    let tbl = document.createElement("table"); //creates the table element
    let tblBody = document.createElement("tbody"); //creates the table body el
    for(let i=1; i<=10; i++){
        let row = document.createElement("tr"); //creates the tr

        for(let j=1; j<=10; j++){
            let result= i*j; //see comment 1. we don't need that because we can calculate the multiplication directly here
            console.log(parseInt(result));
            let cell = document.createElement("td"); //creates the table data
            let cellText = document.createTextNode(`${i}*${j} = ${parseInt(result)}`) // creates the text node and places the info in it
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
    tblBody.appendChild(row);  
    }
    tbl.appendChild(tblBody);
    target.appendChild(tbl);
    

})();
