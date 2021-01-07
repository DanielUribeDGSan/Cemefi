$("#menu-toggle").click(function (e) {
  const btnSider = document.getElementById("menu-toggle");
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
  if ($("#wrapper").hasClass("toggled")) {
    btnSider.innerHTML = "<i class= 'fas fa-angle-double-left font-25' ></i>";
  } else {
    btnSider.innerHTML = "<i class='fas fa-angle-double-right font-25'></i>";
  }
});
