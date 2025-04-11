// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8)) {
        return Math.round(
            13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)
        );
    } else {
        return "N/A";
    }
}

// Static temperature and wind speed
const temperature = 5;
const windSpeed = 8;

// Calculate and display the wind chill
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windChill').innerText = "Wind Chill: " + windChill + "°C";

// Display current year and last modified date in footer
document.getElementById('currentyear').innerText = new Date().getFullYear();
document.getElementById('lastModified').innerText = "Last modified: " + document.lastModified;
