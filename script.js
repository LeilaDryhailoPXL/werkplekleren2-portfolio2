const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
});


const cursor = document.createElement("div");
cursor.className = "cursor-dot";
document.body.appendChild(cursor);

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

document.querySelectorAll(".cover-card").forEach((card, index) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 16;
        const y = (e.clientY - rect.top - rect.height / 2) / 16;
        card.style.transform = `translate(${x}px, ${y}px) rotate(${index === 1 ? 4 : -3}deg)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
        btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
    });
});


document.querySelectorAll(".gif-card").forEach((card, i) => { card.style.transitionDelay = `${i * 120}ms`; });
