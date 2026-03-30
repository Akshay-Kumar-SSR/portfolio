AOS.init();

// Scroll
function scrollToSection() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

// Typing
const text = "Founder • Developer • Visionary";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});