window.onscroll = function(){
    myFunction()};


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("navbar")
    } else {
        navbar.classList.remove("navbar");
    }
}


// var person = {
//     name: "john",
//     age : "30"
// }

// if (person.age >= 80) {
//     console.log(person.name + " you have to get your licensed checked every five years because you are " + person.age + " old") 
// } else if  ( person.age >= 90) {
//     console.log( person.name + " you have to get your license checked every year because you are " + person.age + " old")
// } else {

// console.log( person.name + " never change your license at all because you are " + person.age + " old")
// }