// for addition 
var form1 = document.getElementById('addition')


var first = form1.firstNumber
var second = form1.secondNumber


form1.addEventListener("submit", function (event) {
    event.preventDefault()
    //for addition
    var h3 = document.createElement('h3')
  
    var results1 = parseInt(first.value) + parseInt(second.value)
    h3.textContent = results1
   // console.log(results1)
    var container1 = document.getElementById('container1')
    container1.appendChild(h3)
 })

// for substraction
 var form2 = document.getElementById('substraction')

var third = form2.thirdNumber
var fourth = form2.fourthNumber


form2.addEventListener("submit", function (event) {
    event.preventDefault()
    // // for substraction
    var h4 = document.createElement('h4')

    var results2 = parseInt(third.value) - parseInt(fourth.value)
    h4.textContent = results2

    var container2 = document.getElementById('container2')
    container2.appendChild(h4)
})


// for multiplication
var form3 = document.getElementById('multiplication')

var fifth = form3.fifthNumber
var sixth = form3.sixthNumber

form3.addEventListener("submit", function (event) {
    event.preventDefault()

var h5 = document.createElement(h5)

var results3 = parseInt(fifth.value) * parseInt(sixth.value)  
h5.textContent = results3 

var container3 = document.getElementById('container3')
container3.appendChild (h5)

}
)