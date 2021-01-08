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
    var cookievalue = "Inicio";
    document.cookie =
      "navItem=" +
      encodeURIComponent(cookievalue) +
      "; expires=" +
      expiresdate.toUTCString();
  }
  $("ul li:eq(0)").click(function () {
    document.cookie = "navItem=Inicio";
  });
  $("ul li:eq(1)").click(function () {
    document.cookie = "navItem=Registro";
  });
  $("ul li:eq(2)").click(function () {
    document.cookie = "navItem=Estadistica";
  });
  $("ul li:eq(3)").click(function () {
    document.cookie = "navItem=Sesion";
  });
  $(".btn-contacto").click(function () {
    document.cookie = "navItem=Contacto";
  });

  if (readCookie("navItem") == "Inicio") {
    $("li").removeClass("active");
    $("ul li:eq(0)").addClass("active");
  } else if (readCookie("navItem") == "Registro") {
    $("li").removeClass("active");
    $("ul li:eq(1)").addClass("active");
  } else if (readCookie("navItem") == "Estadistica") {
    $("li").removeClass("active");
    $("ul li:eq(2)").addClass("active");
  } else if (readCookie("navItem") == "Sesion") {
    $("li").removeClass("active");
    $("ul li:eq(3)").addClass("active");
  } else if (readCookie("navItem") == "Contacto") {
    $("li").removeClass("active");
    $(".btn-contacto").css("background-color", "#FFD743");
  }
};
validarNav();

$(document).ready(function () {
  console.log("ready!");
});
