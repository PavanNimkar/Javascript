function toggleMenu() {
  let icon = document.querySelector(".hamburger-icon");
  let menu = document.querySelector(".menu-links");

  icon.classList.toggle("open");
  menu.classList.toggle("open");
}
