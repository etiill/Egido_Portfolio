const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});