$(document).ready(function () {
    var checkScrollBar = function () {
      $(".bg-light").css({
        backgroundColor: $(this).scrollTop() > 1 ? "rgb(0, 0, 0)" : "transparent",
      });
    };
    $(window).on("load resize scroll", checkScrollBar);
  });
  
const filter=document.querySelector('#filter');
let Uni=document.querySelectorAll('.list-group-item');
let srtAZ=document.querySelector('#srtAZ');
let srtZA=document.querySelector('#srtZA');

// filter.addEventListener('keyup',filterUni);
srtAZ.addEventListener('click',sortUni);
srtZA.addEventListener('click',sortUni);



  
  
  var userInput=filter.nodeValue;
  // var list=Array.from(Uni)
  console.log(Uni)

  function sortUni(){
    
    let uniArray = Array.from(Uni)
    uniArray.sort((node1, node2) => node1.textContent < node2.textContent ? -1 : node1.textContent > node2.textContent)
    for(let i=0;i<uniArray;i++){
      if(srtAZ.clicked){
      
        Uni.item(i).firstChild.replaceChild=uniArray[i];
        

      }
      else if(srtZA.clicked){}
      // list[i]=uniArray.reverse()[i]
    }
    
  }