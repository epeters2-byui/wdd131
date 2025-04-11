// Show last modified date in the footer
document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = `Last Updated: ${document.lastModified}`;
    }

    // Optional: Show welcome alert
    // alert("Welcome to the Livelihood Development Institute!");

    // Optional: Hamburger toggle logic (requires hamburger markup in header)
    const menuBtn = document.getElementById("menu-button");
    const navLinks = document.querySelector("header nav");
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }
});
