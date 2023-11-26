// togle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika jeans menu diklik
document.querySelector("#jeans-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// togle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik diluar element
const jn = document.querySelector("#jeans-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!jn.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
