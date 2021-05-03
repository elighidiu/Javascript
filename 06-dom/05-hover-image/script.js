/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   var hoverImg = document.querySelector("IMG");

   var imgLink = hoverImg.getAttribute("data-hover");
   console.log(imgLink);
   

    hoverImg.onmouseover = function(){
        hoverImg.src = imgLink;
   }
   
   hoverImg.onmouseout = function(){
    hoverImg.src = "../../_shared/img/kiss.svg";
}

   

})();
