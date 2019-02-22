var container = document.getElementById('smallContainer')
var form = document.myBigForm

//var exist = false

form.addEventListener("submit", function (event) {
    event.preventDefault()
    container.innerHTML = ""

    var goombasNumber = form.baddies1.value
    var bobNumber = form.baddies2.value
    var cheepNumber = form.baddies3.value

    var h1 = document.createElement('h1')
    var totalPrice = parseInt(goombasNumber) * 5 + parseInt(bobNumber) * 7 + parseInt(cheepNumber) * 11

    h1.textContent = totalPrice + " coins"
    container.appendChild(h1)
   
    
    
})
