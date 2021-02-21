import {db} from "../model/db.js";

const fullName = document.querySelector(".fullName");
const container = document.querySelector(".showContent")
const showEmail = document.querySelector(".showEmail");
const showDob = document.querySelector(".showDob")
const showWork = document.querySelector(".showWork");
const showSkill = document.querySelector(".showSkill");

db.transaction('rw', db.intern, async () => {
    // Transaction Scope
  

    // clear the previous task list
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

        db.intern.each(function(interns){
            var firstName = inters.first_name;
            var lastName = interns.last_name;
            var email = interns.email;
            var dob = interns.date_of_birth;
            var work = interns.work
            var skill = interns.skill
            var led = application.level_of_education;
            var cv = application.cv;

            fullName.innerText = " "+ firstName + " " + lastName;
            showEmail.textContent = " " + email;
            showDob.textContent = " " + dob;
            showWork.textContent = " " + work;
            showSkill.textContent = " "+ skill
            
            console.log(firstName)
            console.log(lastName)
            console.log(email)
            console.log(dob)
            console.log(work)
            console.log(skill)
            //console.log(skill.value)
            //console.log(work.value)
      
           
        });
   


}).then(() => {
    // Transaction Complete
    console.log("Transaction committed");

}).catch(err => {
    // Transaction Failed
    console.error(err.stack);
});