/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   var question = prompt("do you want some cake?", "yes or no?");
   var questl = question.toLowerCase();
   var questn = question.toLowerCase();
 
   if(questl=="yes") {
     alert("congratulation");
   
   }
     else if(questn=="no"){
       alert("more for me");
      }
 
     else {
       alert("please answer only with yes or no");
     }

})();