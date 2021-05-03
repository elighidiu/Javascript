/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   var dimg = document.querySelector("#source");
   var attImg = dimg.getAttribute("data-image");

   var target = document.getElementById("target");
   var newImg = document.createElement("IMG"); //creates the new element
  
   newImg.src= attImg; //sets the new image link 
   target.appendChild(newImg); //add the child element 

   dimg.remove(); //removing the original element



})();
