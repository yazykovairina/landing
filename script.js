function toggleMenu() {
  document.querySelector(".nav").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

// typing
const text = "Лендинги, которые приносят клиентов уже в первые дни";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
typing();

// scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// scroll
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}