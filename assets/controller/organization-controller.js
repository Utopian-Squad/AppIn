import { db } from "../model/db.js";

const orgName = document.querySelector("#orgName");
const orgPostTitle = document.querySelector("#org_postTitle");
const orgDescription = document.querySelector("#org_description");
const orgLed = document.querySelector("#org_led");
// const orgImage = document.querySelector("#org_image");
const orgRequirement = document.querySelector("#org_req"); // requirements 
const orgAof = document.querySelector("#org_aop"); //amount of students a university takes
const orgDeadline = document.querySelector("#org_deadline"); //deadline
const form = document.querySelector("#orgPost");



    form.addEventListener("submit", postText);


    function postText(e) {
        if (orgName.value !== "" || orgPostTitle.value !== "" || orgDescription.value !== "" || orgLed.value !== "" || orgRequirement.value !== "" || orgAof.value !== "" || orgDeadline.value !== "") {
            db.organizations.add({
                org_name: orgName.value,
                org_title: orgPostTitle.value,
                org_description: orgDescription.value,
                org_level_of_education: orgLed.value,
                org_requirements: orgRequirement.value,
                org_aof: orgAof.value,
                org_deadline: orgDeadline.value
            });
           
        }
        db.organizations.reverse();
        //alert("Posted Sucessfully")
        
    }

    db.transaction('rw', db.organizations, () => {
        postText();
        
        db.organizations.reverse();
    });



