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
