/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value


    var performOperation = function(operation) {
            
            var one, two, result;
            one = Number(document.getElementById("op-one").value);
            two = Number(document.getElementById("op-two").value);
       
        switch(operation) {
            case "addition":
                result = one + two;
                window.alert(result);
                break;
            case "substraction":
                window.alert(one - two);
                break;
            case "multiplication":
                result = (one * two);
                window.alert(result);
                break;
            case "division":
                window.alert(one / two);
                break;
            default:
                window.alert("You have entered Wrong operator");
          }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
