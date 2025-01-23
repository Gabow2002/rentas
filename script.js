document.addEventListener("DOMContentLoaded", () => {
    showMonthView(); // Mostrar vista por defecto
});

function showMonthView() {
    const calendar = document.getElementById("calendar-view");
    calendar.innerHTML = ""; // Limpiar contenido anterior

    for (let i = 1; i <= 31; i++) {
        let dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.innerText = `Día ${i}`;
        dayElement.onclick = () => window.location.href = `day.html?day=${i}`;
        calendar.appendChild(dayElement);
    }
}

function showWeekView() {
    const calendar = document.getElementById("calendar-view");
    calendar.innerHTML = "";

    for (let i = 1; i <= 7; i++) {
        let dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.innerText = `Día ${i}`;
        dayElement.onclick = () => window.location.href = `day.html?day=${i}`;
        calendar.appendChild(dayElement);
    }
}

function showDayView() {
    const calendar = document.getElementById("calendar-view");
    calendar.innerHTML = "";

    for (let i = 6; i <= 22; i++) {
        let hourElement = document.createElement("div");
        hourElement.className = "hour";
        hourElement.innerText = `${i}:00 - ${i + 1}:00`;
        hourElement.onclick = () => alert(`Disponibilidad de ${i}:00`);
        calendar.appendChild(hourElement);
    }
}
