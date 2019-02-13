//the set up step
var container = document.getElementById('container')
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function (){
    if (xhr.status === 200 && xhr.readyState === 4){
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData)
      listDataToDOM(data.objects[0].pokemon)  
    } console.log(data)
}
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

//////make the date show up on the page.
function listDataToDOM(pokemon){
     
    var luke = pokemon[0]
    console.log(pokemon[0])

    var name = createElement('h5')

    name.textContent = luke.name

    container.appendChild(name)
}



 