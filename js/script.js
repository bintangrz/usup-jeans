// togle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika jeans menu diklik
document.querySelector("#jeans-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar side bar untuk menghilangkan Nav
const jeans = document.querySelector("#jeans-menu");
document.addEventListener("click", function (e) {
  if (!jeans.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
