document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar-view");
    for (let i = 1; i <= 31; i++) {
        let dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.innerText = `Día ${i}`;
        dayElement.onclick = () => window.location.href = `day.html?day=${i}`;
        calendar.appendChild(dayElement);
    }
});
