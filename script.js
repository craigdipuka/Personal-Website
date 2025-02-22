// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Scroll to the section smoothly on click (enhanced functionality)
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Add a scroll animation effect when sections come into view
    const updateSectionVisibility = () => {
        sections.forEach(section => {
            if (window.scrollY + window.innerHeight > section.offsetTop + section.offsetHeight / 4) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", updateSectionVisibility);
});
