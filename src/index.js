$(".FAQ__title").click(function () {
  if ($(this).children(":first").hasClass("fa-plus")) {
    $(this).children(":first").removeClass("fa-plus").addClass("fa-times");
  } else {
    $(this).children(":first").removeClass("fa-times").addClass("fa-plus");
  }

  let content = $(this).next();
  if (content.css("max-height") != "0px") {
    content.css("max-height", 0);
  } else {
    content.css("max-height", content.prop("scrollHeight") + "px");
  }
});
