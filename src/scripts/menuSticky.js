window.onscroll = function() {menuSticky()};

// pega o menu
var navbar = document.getElementById("menu");

// pega a altura da pagina em relação ao menu
var sticky = navbar.offsetTop;



function menuSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}