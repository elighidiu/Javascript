/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var currentDate= new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    var day = weekday[currentDate.getDay()];
    var date = currentDate.getDate();
        var yearmonths = new Array(12);
        yearmonths[0] = "January";
        yearmonths[1] = "February";
        yearmonths[2] = "March";
        yearmonths[3] = "April";
        yearmonths[4] = "May";
        yearmonths[5] = "June";
        yearmonths[6] = "July";
        yearmonths[7] = "August";
        yearmonths[8] = "September";
        yearmonths[9] = "Octomber";
        yearmonths[10] = "November";
        yearmonths[11] = "December";

    var month = yearmonths[currentDate.getMonth()];
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    document.getElementById("target").innerHTML= day + " "  + date + " " + month + " " + year + ", " + hours + "h" + minutes;

})();
