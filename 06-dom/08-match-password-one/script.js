/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let run = document.getElementById("run").onclick = function() {
        let i = document.getElementById("pass-one").value;
        let j = document.getElementById("pass-two").value;
        console.log(i + ", " + j);

        if(i!==j){
            document.getElementsByTagName("INPUT")[0].style.borderColor = "red";
            document.getElementsByTagName("INPUT")[1].style.borderColor = "red";
        }
}

})();
