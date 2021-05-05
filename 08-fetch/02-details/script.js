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
     
        let heroId = document.getElementById("hero-id").value;
        let correspondingHero = data.heroes[heroId-1];       
        console.log(correspondingHero.name);
      
        var target = document.getElementById("target");
        var t = document.querySelector('#tpl-hero');

        t.content.querySelector(".name").innerHTML = correspondingHero.name;
        t.content.querySelector(".alter-ego").innerHTML = correspondingHero.alterEgo;
        t.content.querySelector(".powers").innerHTML = correspondingHero.abilities;

        var clone = document.importNode(t.content, true); //creates a copy of the template with the added info, waiting to be displayed 
        target.appendChild(clone); //displayes the info


     };
     
     document.getElementById("run").addEventListener("click", myHeroes);

})();
