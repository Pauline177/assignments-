var container = document.getElementById('container')
var form = document.nameForm

form.addEventListener("submit", function(event) {
    event.preventDefault()
    container.innerHTML = " "

//grab the input's value
    var userInput = form.Alias.value

    


// create the element
var h1 = document.createElement('h1')

//give the element the content
// it can be value, attributes, classes, eventlisteners
h1.textContent = userInput
h1.classList.add("main-title")

//append the child
container.appendChild(h1)

}
)

//function is a collection of statements 


// // create the element
// var h1 = document.createElement('h1')

// //give the element the content
// // it can be value, attributes, classes, eventlisteners
// h1.textContent = "hello hi "

// //append the child
// container.appendChild(h1)