// MENU
function toggleMenu() {
  document.querySelector(".nav").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

// REVEAL
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("active");
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// SCROLL
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// TELEGRAM
function goTelegram() {
  window.open("https://t.me/iyazykova", "_blank");
}

// MAGNETIC BUTTON
document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});