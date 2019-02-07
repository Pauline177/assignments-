//1. in css using the (:hover) syntax 
//2. in css using the (:active) syntax
//3. mouseleave using (:not(:hover)) syntax in css

var  square = document.getElementById('square')
window.addEventListener("keydown", function bl(e){
    console.log(e);
    var keyCode = e.keyCode;
    if(keyCode === 66){
        square.style.backgroundColor = "black"
    }
    if(keyCode === 82){
        square.style.backgroundColor = "red"
    }
    if(keyCode === 89){
        square.style.backgroundColor = "yellow"
    }
    if(keyCode === 79){
        square.style.backgroundColor = "orange"
    }
    if(keyCode === 71){
        square.style.backgroundColor = "green"
    }
    if(keyCode === 86){
        square.style.backgroundColor = "violet"
    }
});

square.addEventListener("dblclick", function (){
    square.style.backgroundColor = "green"
})

square.addEventListener("wheel", function (){
    square.style.backgroundColor = "orange"
})