// you
var text = document.getElementById('first')

console.log(text)

var myH3 = document.createElement('h3')
myH3.textContent = "Bonjour comment vas tu aujourdhui'?"

var container = document.getElementById('container')
container.appendChild(myH3)

//for an image 
// 1. create the element first
var myImg = document.createElement('img')
// 2. to add the img you add the link using setAttribute 
myImg.setAttribute("src", " https://tse3.mm.bing.net/th?id=OIP.5WNoJaxV0fscvgzMg6EKWwHaE8&pid=15.1&P=0&w=256&h=172")
// 3. for styling 
//myImg.style.width 200px;
// 4. then append to place it in the container div
container.appendChild(myImg)
// 5. to have it show on the pae then console log it.
//console.log(childNodes)



//EVENTS AND EVENT LISTENERS
var helloBtn = document.getElementById('hello-btn')
//1. what event  
//2. what you want happen when the button is clicked 

//first way using thr named function 
// helloBtn.addEventListener("click", function(){
//     alert("hello there")
// }
// )

//second way using the anonymous function 
// helloBtn.addEventListener("click", sayHello)

// function sayHello() {
//     alert("hello 2")
// }

window.addEventListener("click", function(event){
    if(event.which === 97){
        console.log("you pressed the A key")
    }
})


