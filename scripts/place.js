// Function for calculating the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
      return Math.round(
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
      ) + "°C";
    } else {
      return "N/A";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Set current year and last modified
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
  
    // Get values from the HTML and calculate wind chill
    const temp = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windspeed").textContent);
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windChill").textContent = windChill;
  });
  