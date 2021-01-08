$("#menu-toggle").click(function (e) {
  const btnSider = document.getElementById("menu-toggle");
  const content = document.getElementById("page-content-wrapper");
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
  if ($("#wrapper").hasClass("toggled")) {
    content.style.opacity = "1";
  } else {
    content.style.opacity = "0";
  }
});

$("#close-menu").click(function (e) {
  const btnSider = document.getElementById("menu-toggle");
  const content = document.getElementById("page-content-wrapper");
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
  if ($("#wrapper").hasClass("toggled")) {
    content.style.opacity = "1";
  } else {
    content.style.opacity = "0";
  }
});

$("#abrirModal").click(function () {
  $("#lib-anim").remove();
});

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}
const validarNav = () => {
  if (!readCookie("navItem")) {
    var expiresdate = new Date(2068, 1, 02, 11, 20);
    var cookievalue = "1";
    document.cookie =
      "navItem=" +
      encodeURIComponent(cookievalue) +
      "; expires=" +
      expiresdate.toUTCString();
  }
  $("ul li:eq(0)").click(function () {
    document.cookie = "navItem=1";
  });
  $("ul li:eq(1)").click(function () {
    document.cookie = "navItem=2";
  });
  $("ul li:eq(2)").click(function () {
    document.cookie = "navItem=3";
  });
  $("ul li:eq(3)").click(function () {
    document.cookie = "navItem=4";
  });
  $(".btn-contacto").click(function () {
    document.cookie = "navItem=5";
  });
  $(".navbar-brand").click(function () {
    document.cookie = "navItem=1";
  });

  if (readCookie("navItem") == "1") {
    $("li").removeClass("active");
    $("ul li:eq(0)").addClass("active");
  } else if (readCookie("navItem") == "2") {
    $("li").removeClass("active");
    $("ul li:eq(1)").addClass("active");
  } else if (readCookie("navItem") == "3") {
    $("li").removeClass("active");
    $("ul li:eq(2)").addClass("active");
  } else if (readCookie("navItem") == "4") {
    $("li").removeClass("active");
    $("ul li:eq(3)").addClass("active");
  } else if (readCookie("navItem") == "5") {
    $("li").removeClass("active");
    $(".btn-contacto").css("background-color", "#FFD743");
  }
};
validarNav();

$(document).ready(function () {
  console.log("ready!");
});
