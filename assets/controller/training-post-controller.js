import { db } from "../model/db.js";
const showText = document.querySelector("#showText");
const container = document.querySelector("#containerDisplay")
const title = document.querySelector("#title");

db.transaction('rw', db.universities, async () => {
    // Transaction Scope
  

    // clear the previous task list
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //function posts(){
        db.universities.each(function(post){
            var uniName = [post.name];
            var postTitle = [post.title];
            var postDesc = [post.description];
            var uniLed = [post.level_of_education];
            var uniRequirement = [post.requirements];
            var postImage = [post.post_image];
            var uniAof = [post.aof];
            var postDeadline = [post.deadline];
            for (var i = 0; i < uniName.length; i++){ 
                var div1 = document.createElement('div');
                div1.className = "card m-5"
                var  university = document.createElement("div");
                var description = document.createElement("p");
                var led = document.createElement("p");
                var reqr = document.createElement("p")
                var image = document.createElement("div")
                var aof = document.createElement("p");
                var deadline = document.createElement("p");
                var title = document.createElement("div")

                image.className = "card-title"
                university.className = "card-title"
                university.style = "font-weight:bolder;font-size:larger"

                title.className = "card-title"
                description.className = "card-title"
                led.className = "card-title"
                reqr.className = "card-title"
                aof.className = "card-title"
                deadline.className = "card-title"

                image.textContent = postImage[i]
                university.textContent = uniName[i]
                title.textContent = postTitle[i]
                description.textContent = postDesc[i]
                reqr.textContent = "Requirements: " + uniRequirement[i];
                led.textContent = "Open for: " + uniLed[i];
                aof.textContent = "Amount of interns needed: " + uniAof[i]
                deadline.textContent = "Deadline: " + postDeadline[i]
                
                //var fullName = div2.textContent + " " + div3.textContent
                div1.appendChild(image)
                div1.appendChild(university)
                div1.appendChild(title)
                div1.appendChild(description)
                div1.appendChild(reqr)
                div1.appendChild(led)
                div1.appendChild(aof)
                div1.appendChild(deadline)
                div1.style = "float:left;width:350px;text-align:center;background-color: rgba(0,0,5,0.1)"
                container.appendChild(div1);
                
            }
        });


}).then(() => {

    // Transaction Complete
    console.log("Transaction committed");

}).catch(err => {
    // Transaction Failed
    console.error(err.stack);
});