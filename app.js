/* Navbar */

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});


// JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const viewports = document.querySelectorAll(".viewport");
  let currentViewportIndex = 0;

  function scrollToViewport(index) {
    viewports[index].scrollIntoView({ behavior: "smooth" });
  }

  function handleScroll(event) {
    const direction = event.deltaY > 0 ? "down" : "up";

    if (direction === "down" && currentViewportIndex < viewports.length - 1) {
      currentViewportIndex++;
      scrollToViewport(currentViewportIndex);
    } else if (direction === "up" && currentViewportIndex > 0) {
      currentViewportIndex--;
      scrollToViewport(currentViewportIndex);
    }
  }

  document.addEventListener("wheel", handleScroll);
});
