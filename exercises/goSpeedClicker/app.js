var box = document.getElementById('boxClick')
var display = document.getElementById('showClicks')

var show1 = JSON.parse(localStorage.getItem('numbers')) || 0

var count  = show1 
display.textContent = show1

box.addEventListener("click", function () {
    count += 10;
    display.textContent = count 
    localStorage.setItem("numbers", JSON.stringify(count))
});
