/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").onclick = function getBday() {

        var now = new Date();
        var currentYear = now.getFullYear();

        var bdayYear=document.getElementById("dob-year").value;
        var age=currentYear-bdayYear;

        alert ("Your age is: " + age);
    }  

})();
