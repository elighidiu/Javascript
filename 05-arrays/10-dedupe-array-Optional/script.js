/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
        document.getElementById("run").addEventListener("click", function (){

            //    var noDup = fruits.filter((element, index) => fruits.indexOf(element) === index);

            //    console.log(noDup);

            var noDup = [];
            fruits.map(element => { 
                    if(!noDup.includes(element)){
                        noDup.push(element);
                    }
            
            })    
            
            console.log(noDup);

        })  
        


})();
