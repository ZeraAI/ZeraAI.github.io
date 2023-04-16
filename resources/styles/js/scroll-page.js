const footer = document.getElementById("footer");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    footer.style.opacity = "0";
  } else {
    footer.style.opacity = "1";
  }
});

const horse = document.getElementById("horse");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    horse.style.opacity = "0";
  } else {
    horse.style.opacity = "1";
  }
});