/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function(){

            // first generate array with 10 random numbers
            var numbers = [];

            for (let i=0; i<=9; i++){
                numbers.push(Math.floor(Math.random()*100)+1);
            }
            //console.log(numbers);
            numbers.forEach((element, index) => {

                document.getElementById(`n-${index+1}`).innerHTML=`${element}`;
            })

            var min = Math.min(...numbers); //spread takes values from array as individual numbers 
            document.getElementById("min").innerHTML=`${min}`;

            var max = Math.max(...numbers);
            document.getElementById("max").innerHTML=`${max}`;

            var sum=0;
            for (let i=0; i<numbers.length; i++){
                sum+=numbers[i];
            }
            //var sum = numbers.reduce((acc, cur) => acc+=cur, 0); varianta cu metoda reduce
            document.getElementById("sum").innerHTML=`${sum}`;

            var avr = sum/numbers.length;
            document.getElementById("average").innerHTML=`${avr}`;


    })

})();
