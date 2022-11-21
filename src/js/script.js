$(document).ready(function () {
  // on click switch button
  $("#flexSwitchCheckDefault").click(function () {
    // check if switch box check
    if ($("#flexSwitchCheckDefault").prop("checked") == true) {
      // background color black and text color white and text
      $("body").css("background-color", "black");
      $("body").css("color", "white");
      $(this).next().text("Switch To Light Mode");
    } else {
      // background color white and text color black and text
      $("body").css("background-color", "white");
      $("body").css("color", "black");
      $(this).next().text("Switch To Dark Mode");
    }
  });
});
