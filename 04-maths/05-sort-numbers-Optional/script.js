/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        //var num = [2, 4, 14, 10, 90, 23, 16];

        var num = document.getElementById("numbers").value;
        
        const array = num.split(",");
        array.sort(function(a, b){return a-b});
        console.log(array);      
        // var sortedString = array.join(", "); transforma array-ul in string
        

    });

})();
