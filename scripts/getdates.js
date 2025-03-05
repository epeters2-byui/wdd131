// Get current year
const currentYear = new Date().getFullYear();

// Get last modified date
const lastModified = document.lastModified;

// Output current year in the first paragraph of the footer
const yearElement = document.querySelector("#currentyear");
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Output last modified date in the second paragraph of the footer
const modifiedElement = document.querySelector("#lastModified");
if (modifiedElement) {
    modifiedElement.textContent = `Last Modified: ${lastModified}`;
}
