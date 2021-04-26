/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var age = prompt("what's your age?");
    var gender = prompt("what's your gender?");
    var town = prompt("what's the name of the town where you live?");
 
    var conf = window.confirm("Your age is "+ age + ". " + "Your gender is " + gender + ". " + "You live in " + town + ". "+ "Please confirm your data.")
 
    while (conf!==true) {
     
     var age = prompt("what's your age?");
     var gender = prompt("what's your gender?");
     var town = prompt("what's the name of the town where you live?");
 
     var conf = window.confirm("Your age is "+ age + ". " + "Your gender is " + gender + ". " + "You live in " + town + ". "+ "Please confirm your data.")
    }
 
    
})();
