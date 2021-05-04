/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  
    async function myHeroes(){
        let response = await fetch("http://localhost:8000/_shared/api.json");
        let data = await response.json();
     
        console.log(data);
        
        /*data.heroes.forEach(element => {
        console.log(element.name);
        })
        */
       var heroId = document.getElementById("hero-id").value;
       console.log(heroId);

       var correspondingHero = data.heroes[heroId-1];
       console.log(correspondingHero);

       document.getElementById("target").innerHTML=heroId;
       document.getElementsByTagName("template")

     };
 
     document.getElementById("run").addEventListener("click", myHeroes);

})();
