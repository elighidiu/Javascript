/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
        
    let run = document.getElementById("run").addEventListener("click", function(){
    
    var passOne = document.getElementById("pass-one").value;
    var passTwo = document.getElementById("pass-two").value;
   
    console.log(passOne + " " + passTwo);
        
        if(passOne!==passTwo){
            document.getElementsByTagName("INPUT")[0].setAttribute("class", "error");
            document.getElementsByTagName("INPUT")[1].setAttribute("class", "error");
        } else {
            document.getElementsByTagName("INPUT")[0].setAttribute("class", "");
            document.getElementsByTagName("INPUT")[1].setAttribute("class", "");
        }
    });

 

})();
