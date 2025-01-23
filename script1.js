document.addEventListener("DOMContentLoaded", () => {
    loadCalendar("calendar", false);
    loadCalendar("owner-calendar", true);
});

function loadCalendar(elementId, isOwner) {
    const container = document.getElementById(elementId);
    for (let day = 1; day <= 60; day++) {
        let div = document.createElement("div");
        div.className = "day";
        div.innerHTML = `D${day}`;
        div.onclick = () => showAvailability(day, isOwner);
        container.appendChild(div);
    }
}

function showAvailability(day, isOwner) {
    alert(isOwner ? `Administración de D${day}` : `Disponibilidad de D${day}`);
}
