document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (!menuToggle || !navMenu) {
    console.warn("Navbar elements not found on this page");
    return;
  }

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});
 
 document.querySelectorAll(".before-after-container").forEach(container => {
  const slider = container.querySelector(".slider");
  const beforeImage = container.querySelector(".before-image-wrapper");

  slider.addEventListener("input", (e) => {
    beforeImage.style.width = `${e.target.value}%`;
  });
});
