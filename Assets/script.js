var currentDay = document.getElementById('currentDay');

var timing = moment().set("dddd, MMMM Do YYYY, h:mm:ss a");

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});


$("#currentDay").text(timing);
// console.log(timing);

var button = document.getElementsByClassName("button");
console.log(button);
var exatext = "text";

for(let i = 0; i< button.length; i++) {



button[i].addEventListener("click", function(event) {
   console.log("hello");
    event.preventDefault();

    function storetext(){
        console.log(JSON.stringify(exatext));
        localStorage.setItem("text", JSON.stringify(text));
    
    }
    
    var temp = "" + i + "";
    console.log(temp);

    var text = document.getElementById(temp).value;
    console.log(text);

      localStorage.setItem(temp, text);
      
    
});}

var seven = document.getElementById("0");
var eight = document.getElementById("1");
var nine = document.getElementById("2");
var ten = document.getElementById("3");
var eleven = document.getElementById("4");
var twelve = document.getElementById("5");
var thriteen = document.getElementById("6");
var fourteen = document.getElementById("7");
var fifteen = document.getElementById("8");

var maybe = [seven,eight,nine,ten,eleven,twelve,thriteen,fourteen,fifteen];

for(let i = 0; i< maybe.length; i++) {
    maybe[i].value = localStorage.getItem(i);
    localStorage.getItem(i);

}

// // changing my background colors..
// const form = document.getElementsByName("form");
// let currentHour = parseInt(moment().format('H'));

// Array.from(form).forEach(form => {
//   let
//     formIdString = form.id,
//     formHour;
//   if (formIdString) {
//     formHour = parseInt(formIdString);
//   }
//   if (formHour) {
//     // Compares form id to current hour and sets color accordingly
//     if (currentHour === formHour) {
//       setColor(form, "red");
//     } else if ((currentHour < formHour) && (currentHour > formHour - 8)) {
//       setColor(form, "green");
//     } else if ((currentHour > fromHour) && (currentHour < formHour + 8)) {
//       setColor(form, "lightgrey");
//     } else {
//       setColor(form, "white");
//     }
//   }
// });

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }