/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   var nume=prompt("Please enter your name", "Harry Potter"); //harry potter is a default name in casse the user enters no info
   
       alert ("Hello, " + nume); //displays name in alert box
       document.write("Hello, "+ nume + ". How are you today?"); //displays name in promt dialog box in the html file
   
})();
