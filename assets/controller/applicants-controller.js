import { db } from "../model/db.js";
const showText = document.querySelector("#showText");
const container = document.querySelector("#containerDisplay")
const title = document.querySelector("#title");

db.transaction('rw', db.applications, async () => {
    // Transaction Scope
  

    // clear the previous task list
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //function posts(){
        db.applications.each(function(application){
            var firstName = [application.first_name];
            var lastName = [application.last_name];
            var led = [application.level_of_education];
            var cv = [application.cv];
            for (var i = 0; i < firstName.length; i++){ 
                var div1 = document.createElement('div');
                div1.className = "card m-5"
               
                var div4 = document.createElement("div")
                var div5 = document.createElement("div")
                var fullName = document.createElement("div")

                fullName.className = "card-title"
                div4.className = "card-title"
                div5.className = "card-title"
                
                fullName.textContent = "Full Name: "+ firstName[i] + " " + lastName[i]
                
                div4.textContent = "Level of Education" + led[i];
                div5.textContent = "CV" + cv[i];
                
                //var fullName = div2.textContent + " " + div3.textContent
                div1.appendChild(fullName)
                div1.appendChild(div4)
                div1.appendChild(div5)
                div1.style = "float:left;width:250px;text-align:center"
                container.appendChild(div1);
                
            }
            //alert(element); <-- this call alerts all names in database.  
        });
    //}

    // db.applications.each(application =>
    //     showText.innerHTML = application.first_name);
    // const div = document.createElement("div");
    // div.className = "posts";
    // const p = document.createElement("span")
    // p.innerHTML = application.first_name
    // div.appendChild(p);
    // container.appendChild(div);


}).then(() => {

    //
    // Transaction Complete
    //

    console.log("Transaction committed");

}).catch(err => {

    //
    // Transaction Failed
    console.error(err.stack);
});