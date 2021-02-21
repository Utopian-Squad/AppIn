$(document).ready(function () {
    var checkScrollBar = function () {
      $(".bg-light").css({
        backgroundColor: $(this).scrollTop() > 1 ? "rgb(0, 0, 0)" : "transparent",
      });
    };
    $(window).on("load resize scroll", checkScrollBar);
  });