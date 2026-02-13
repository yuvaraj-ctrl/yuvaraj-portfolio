// Highlight active navbar link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 140;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) current = id;
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });
});

// Circle progress (Professional Skills)
document.querySelectorAll(".circle-progress").forEach(circle => {
  const percent = Number(circle.dataset.percent || 0);
  const deg = (percent / 100) * 360;
  circle.style.background = `conic-gradient(var(--aqua) ${deg}deg, rgba(255,255,255,.08) 0deg)`;
});
