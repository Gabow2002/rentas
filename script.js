document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar-view");
    const startDate = new Date(2025, 0, 1); // Enero 1, 2025

    for (let i = 0; i < 31; i++) {
        let currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        let formattedDate = currentDate.toISOString().split('T')[0];  // Formato YYYY-MM-DD

        let dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.innerText = formattedDate;
        dayElement.onclick = () => window.location.href = `day.html?day=${formattedDate}`;
        calendar.appendChild(dayElement);
    }
});
