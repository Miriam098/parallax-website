const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".navbar");

/* Toggle mobile menu */
function toggleNav() {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");

    // adds the menu (hamburger) icon
    toggle.querySelector("a").innerHTML = "<i class=’fa fa-bars’></i>";
  } else {
    nav.classList.add("active");

    // adds the close (x) icon
    toggle.querySelector("a").innerHTML = "<i class=’fa fa-times’>x</i>";
  }
}

/* Event Listener */
toggle.addEventListener("click", toggleNav, false);
