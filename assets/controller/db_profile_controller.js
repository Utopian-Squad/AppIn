import { db } from "../model/db_profile.js";

const fn = document.getElementById("fn");
const ln = document.getElementById("ln");
const led = document.getElementById("led");
const cv = document.querySelector("#cv");
const dob = document.getElementById("dob");
const skill = document.getElementById("skill");
const work = document.getElementById("work");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const form = document.getElementById("submit");
const confirm = $("#confirm").val();




    form.addEventListener("submit", postText);

function postText(e) {
   if (fn.value !== "" || ln.value !== "" || led.value !== "" || dob.value !== "" || skill.value !== "" || work.value !== "" || email.value !== "" || gender.value !== "" || cv.value !== 0) {
        db.intern.add({
            first_name: fn.value,
            last_name: ln.value,
            level_of_education: led.value,
            date_of_birth: dob.value,
            email: email.value,
            skill: skill.value,
            work: work.value,
            gender: gender.value,
            cv: cv.value
        });
        console.log("email: "+email.value)
       
    }
}



db.transaction('rw', db.intern, () => {
        postText();
});









