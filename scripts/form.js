// Assuming an array of products
const products = [
    "Product A",
    "Product B",
    "Product C",
    "Product A",  // Duplicate
    "Product D"
];

// Get the dropdown element
const dropdown = document.getElementById("productName");

// Ensure uniqueness
const uniqueProducts = [...new Set(products)];

// Clear the dropdown for duplication
dropdown.innerHTML = "";

// Populate the dropdown with unique products here
uniqueProducts.forEach(product => {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    dropdown.appendChild(option);
});

// last modified date (for footer)
const lastModifiedDate = document.lastModified;
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
}

document.addEventListener("DOMContentLoaded", () => {
    // Get the review count from localStorage, or default
    let reviewCount = localStorage.getItem("reviewCount") || 0;

    // Update the review count from submitted form
    const form = document.querySelector("form");
    form.addEventListener("submit", () => {

        reviewCount++;

        // Updated count back to localStorage
        localStorage.setItem("reviewCount", reviewCount);
    });
});
