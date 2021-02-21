// $(window).scroll(function () {
//   $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
// });

// $(document).ready(function () {
//   var scroll_start = 0;
//   var startchange = $("#startchange");
//   var offset = startchange.offset();
//   if (startchange.length) {
//     $(document).scroll(function () {
//       scroll_start = $(document).scrollTop();
//       if (scroll_start > offset.top) {
//         $(".navbar").css("background-color", "#cccccc");
//       } else {
//         $(".navbar").css("background-color", "transparent");
//       }
//     });
//   }
// });

var d= new Date();

var DateString = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
console.log(DateString)


//d.getFullYear();//Get the year as a four digit number (yyyy)
//d.getMonth();//Get the month as a number (0-11)
//Get the day as a number (1-31)


