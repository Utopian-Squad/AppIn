import {db} from "../model/db.js";

const universityName = document.querySelector("#universityName");
const universityPostTitle = document.querySelector("#uni_postTitle");
const universityDescription = document.querySelector("#uni_description");
const uniLed = document.querySelector("#uni_led");
const uniImage = document.querySelector("#uni_image");
const uniRequirement = document.querySelector("#uni_req"); // requirements 
const uniAof = document.querySelector("#uni_aop"); //amount of students a university takes
const uniDeadline = document.querySelector("#uni_deadline"); //deadline
const form = document.querySelector("#post");




form.addEventListener("submit",postText);

function postText(){
    if(universityName.value !== "" || universityPostTitle.value !== "" || universityDescription.value !== "" || uniLed.value !== "" || uniImage.value !=="" || uniRequirement.value !== "" || uniAof.value !== "" || uniDeadline.value !== "" ){
        db.universities.add({
            name : universityName.value,
            title : universityPostTitle.value,
            description : universityDescription.value,
            level_of_education:uniLed.value,
            requirements : uniRequirement.value,
            post_image:uniImage.value,
            aof : uniAof.value,
            deadline:uniDeadline.value
         });
    }   
}

db.transaction('rw', db.universities, () => {
    postText();
});



