var form = document.myForm

var first = form.name1
var last = form.name2
var age = form.age

form.addEventListener("submit", function(event){
    event.preventDefault() 

    // 1.print for both names and the age
    results1 = ("first name: " + first.value + " last name: " + last.value + " age: " + age.value)
     
    //alert (results1)


    // 2. print for the gender, radio input. 
    var gender = form.gender
     for ( var i =0; i < gender.length; i++) {
         if (gender[i].checked) {

             results2 = (" gender: " + gender[i].value);
            //alert (results2)
        
             break;
         } 
     }

     //3. print of the destination, selected item 
     var d = document.getElementById('destination')
     var where = d.options[d.selectedIndex].value;
      results3 = (" Destination: " + where)
      //alert (results3)


     //4. print of dietary restrictions, checkbox.
     
    //  document.getElementById('checkBox').checked = true;
     var restrictions = []
     var dietary = form.dietary
     for ( var i =0; i < dietary.length; i++) {
         if (dietary[i].checked) {
           restrictions.push(dietary[i].value)  
             
         }

     }
     //you need to run the alert outside of forloop to not keep running.  
     
     alert (results1 + results2 + results3 + " restriction: " + restrictions)




}
)