import { db } from "../model/db.js";
const showText = document.querySelector("#showText");
const container = document.querySelector("#containerDisplay")
const length = document.querySelectorAll(".card").length
const title = document.querySelector("#title");

db.transaction('rw', db.organizations, async () => {
    // Transaction Scope
  

    // clear the previous task list
    // while (container.firstChild) {
    //     container.removeChild(container.firstChild);
    // }

        db.organizations.each(function(post){
            var orgName = [post.org_name];
            var postTitle = [post.org_title];
            var postDesc = [post.org_description];
            var orgLed = [post.org_level_of_education];
            var orgRequirement = [post.org_requirements];
            var isApply = [post.org_is_apply];
            var orgAof = [post.org_aof];
            var postDeadline = [post.org_deadline];
            var div1 = document.createElement('div');
                div1.className = "card m-3"
                div1.style = "width: 10px;background-color: rgba(30, 139, 195, 1);"
                var  org = document.createElement("div");
                var description = document.createElement("p");
                var led = document.createElement("p");
                var reqr = document.createElement("p")
                var apply = document.createElement("button")
                var aof = document.createElement("p");
                var deadline = document.createElement("p");
                var title = document.createElement("div")
            for (var i = 0; i < orgName.length; i++){ 
                

                apply.className = "btn btn-outline-primary"
                org.className = "card-title"
                org.style = "font-weight:bolder;font-size:larger"

                title.className = "card-title"
                description.className = "card-title"
                led.className = "card-title"
                reqr.className = "card-title"
                aof.className = "card-title"
                deadline.className = "card-title"
                

                //apply.textContent = isApply[i]
                apply.textContent = "Apply"
                org.textContent = orgName[i]
                title.textContent = postTitle[i]
                description.textContent = postDesc[i]
                reqr.textContent = "Requirements: " + orgRequirement[i];
                led.textContent = "Open for: " + orgLed[i];
                aof.textContent = "Amount of interns needed: " + orgAof[i]
                deadline.textContent = "Deadline: " + postDeadline[i]
                
                //var fullName = div2.textContent + " " + div3.textContent
               
                div1.appendChild(org)
                div1.appendChild(title)
                div1.appendChild(description)
                div1.appendChild(reqr)
                div1.appendChild(led)
                div1.appendChild(aof)
                div1.appendChild(deadline)
                apply.style = "width:300px;heigth:100px"
                
                div1.appendChild(apply)
                div1.style = "float:left;width:300px;text-align:center;background-color: rgba(197, 239, 247, 1);"
                container.appendChild(div1);
                
            }

           
            apply.addEventListener("click",()=>{
                console.log("Application Succeded")
                
                alert("Application Succeded")
                apply.disabled = true;   
               
                isApply     
            });
        });


}).then(() => {

    // Transaction Complete
    console.log("Transaction committed");

}).catch(err => {
    // Transaction Failed
    console.error(err.stack);
});


function applied(){
//     db.transaction('rw', db.applications, async () => {
//         // Transaction Scope
      
    
//         // clear the previous task list
//         // while (container.firstChild) {
//         //     container.removeChild(container.firstChild);
//         // }
    
//             db.applications.each(function(application){
//                 var orgName = [application.first_name];
//                 var postTitle = [application.last_name];
//                 var postDesc = [application.level_of_education];
//                 var orgLed = [application.cv];
//                 var div1 = document.createElement('div');
//                     div1.className = "card m-3"
//                     div1.style = "width: 10px;background-color: rgba(0,0,5,0.1);"
//                     var  org = document.createElement("div");
//                     var description = document.createElement("p");
//                     var led = document.createElement("p");
//                     var reqr = document.createElement("p")
//                     var apply = document.createElement("button")
//                     var aof = document.createElement("p");
//                     var deadline = document.createElement("p");
//                     var title = document.createElement("div")
//                 for (var i = 0; i < orgName.length; i++){ 
                    
    
//                     apply.className = "btn btn-outline-primary"
//                     org.className = "card-title"
//                     org.style = "font-weight:bolder;font-size:larger"
    
//                     title.className = "card-title"
//                     description.className = "card-title"
//                     led.className = "card-title"
//                     reqr.className = "card-title"
//                     aof.className = "card-title"
//                     deadline.className = "card-title"
                    
    
//                     //apply.textContent = isApply[i]
//                     apply.textContent = "Apply"
//                     org.textContent = orgName[i]
//                     title.textContent = postTitle[i]
//                     description.textContent = postDesc[i]
//                     reqr.textContent = "Requirements: " + orgRequirement[i];
//                     led.textContent = "Open for: " + orgLed[i];
//                     aof.textContent = "Amount of interns needed: " + orgAof[i]
//                     deadline.textContent = "Deadline: " + postDeadline[i]
                    
//                     //var fullName = div2.textContent + " " + div3.textContent
                   
//                     div1.appendChild(org)
//                     div1.appendChild(title)
//                     div1.appendChild(description)
//                     div1.appendChild(reqr)
//                     div1.appendChild(led)
//                     div1.appendChild(aof)
//                     div1.appendChild(deadline)
//                     apply.style = "width:300px;heigth:100px"
                    
//                     div1.appendChild(apply)
//                     div1.style = "float:left;width:300px;text-align:center;background-color: rgba(0,0,5,0.1)"
//                     alert(div1);
                    
//                 }
//             });
    
    
//     }).then(() => {
    
//         // Transaction Complete
//         console.log("Transaction committed");
    
//     }).catch(err => {
//         // Transaction Failed
//         console.error(err.stack);
//     });
// 

}