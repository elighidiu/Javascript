/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var counter = document.getElementById("counter");
    var inputArea = document.getElementById("pass-one");

    inputArea.addEventListener("input", updateValue);
    
    function updateValue(e){
            var pass = e.target.value; //get the value from input

            counter.textContent=pass.length;
            console.log(pass);

            if(pass.length>9){
                inputArea.setAttribute("disabled", "");
            }
        
    };

  
})();
