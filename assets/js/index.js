var modalBtn1 = document.querySelector("#btnModal1")
var modalBtn2 = document.querySelector("#btnModal2")
var modal1 = document.querySelector("#modal1")
var modal2 = document.querySelector("#modal2")

if(modalBtn1){
    modalBtn1.addEventListener("click",()=>{
        modal1.style = "display:none"
    });
    
}else if(modalBtn2){
    modalBtn2.addEventListener("click",()=>{
        modal2.style = "display:none"
    });
    
}
