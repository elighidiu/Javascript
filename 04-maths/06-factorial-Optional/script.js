/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

       
    const number = document.getElementById("number").value;

    
    if (number < 0) {
        console.log("Error!");
    } else if (number === 0) {
        console.log("The factorial is 1. ");
    } else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
         }
    console.log(`The factorial number of ${number} is ${fact}` );
    }

    });

})();
