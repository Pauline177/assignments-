var container = document.getElementById('container')
var form = document.getElementById('enter')

    ///get the information in postman////
function getData(){axios.get("https://api.vschool.io/pauline/todo").then(function(response){
    var tasks = response.data
    listTodos(tasks)

    }).catch(function(error){
    console.log(error)
})
}
    //// function that makes it appear to the page (DOM)////
function listTodos(tasks){
    for (var i = 0; i < tasks.length; i++){
                    //make it show on the DOM//
                //create an element///
        var smallContainer = document.createElement('div')
        var title = document.createElement('h1')
        var imageUrl = document.createElement('img')
        var describe = document.createElement('h1')
        var price = document.createElement('h1')
        var status = document.createElement('h1')
            
                /// give your element content///
        title.textContent = tasks[i].title
        imageUrl.setAttribute("src", tasks[i].imgUrl)
        describe.textContent = tasks[i].description
        price.textContent = tasks[i].price
        status.textContent = tasks[i].completed
        

        //line through if completed//
        if(tasks[i].completed){
            title.style.textDecoration = "line-through"
        }
        ////append it to the div elements to smallContainer and smallContainer into the container////
        smallContainer.appendChild(title)
        smallContainer.appendChild(imageUrl)
        smallContainer.appendChild(describe)
        smallContainer.appendChild(price)
        smallContainer.appendChild(status)
        container.appendChild(smallContainer)
    }
}

/// event listener to do our post request to the API ////
form.addEventListener("submit", addToDo)
function addToDo(event){
    event.preventDefault()
     
    var newInfo = {
        title:       form.title.value,
        imgUrl:   form.imgurl.value,
        description: form.description.value,
        price:       form.price.value,
        completed:   form.completed.checked
    }

        ///// reseting the form  to be empty///
        form.title.value =""
        form.imgurl.value =""
        form.description.value =""
        form.price.value =""
        form.completed.checked =""

    axios.post("https://api.vschool.io/pauline/todo", newInfo).then(function(response){
        getData()
        container.innerHTML = ""
        console.log(response)
    }).catch(function(error){
        console.log(error)
    })
}
getData()


    ///// delete request ////////
function doDelete(){axios.delete("https://api.vschool.io/pauline/todo", ).then(function(response){

})
}

//////////// NOTES//////////////
//1. a contaiber that will show the todo lists. 
//2. get the data (axios) change name to your name.
//3. make the toDos show up on the page
//4. adding an imgae. 
// i will add the eachtask in different small container and apped the smaller container in the big one.
// we can add a class to them by "div.classList.add("name of class")
// show the completed tasks, with an if statement 
    // if (tasks[i].completed) {
            //title.style.textDecoration = "line- through"}
//// add the form to get the inputs from the user.     
/// add the even listener to get a reaction when the user click submit. 
// make the get axios to be re-usable 
// for post put (taskcontainer = "") will me the page be empty the right after it, 
//call the name of the axios.get. if we want the input of the user to be cleared right after the set the string
// to be empty aswell that is goint to clear it. 