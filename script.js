document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar-view");
    const startDate = new Date(2025, 0, 1); // Enero 1, 2025

    for (let i = 0; i < 31; i++) {
        let currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        let formattedDate = currentDate.toISOString().split('T')[0];  // YYYY-MM-DD
        let dayName = currentDate.toLocaleDateString('es-ES', { weekday: 'long' });
        let dayNumber = currentDate.getDate().toString().padStart(2, '0');
        let displayDate = `${dayName.charAt(0).toUpperCase() + dayName.slice(1)} ${dayNumber}`;

        let dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.innerText = displayDate;
        dayElement.onclick = () => window.location.href = `day.html?day=${formattedDate}`;
        calendar.appendChild(dayElement);
    }
});
function showCourt(court) {
    const params = new URLSearchParams(window.location.search);
    const day = params.get('day');

    fetch(`data/${court}.txt`)
        .then(response => response.text())
        .then(text => {
            let rows = text.trim().split("\n");
            let output = `<h2>Disponibilidad de ${court.replace('court', 'Cancha ')}</h2>`;
            output += "<table border='1' style='width: 100%; text-align: center; border-collapse: collapse;'>";
            output += "<tr><th>Hora</th><th>Cliente</th><th>Estado</th></tr>";

            rows.slice(1).forEach(row => {
                let columns = row.split(",");
                let statusClass = "";

                switch (columns[3].trim().toLowerCase()) {
                    case "libre":
                        statusClass = "status-libre";
                        break;
                    case "pagada":
                        statusClass = "status-pagada";
                        break;
                    case "pendiente":
                        statusClass = "status-pendiente";
                        break;
                    default:
                        statusClass = "";
                }

                output += `<tr>
                    <td>${columns[1]}</td>
                    <td>${columns[2] || 'Sin cliente'}</td>
                    <td class='${statusClass}'>${columns[3]}</td>
                </tr>`;
            });

            output += "</table>";
            document.getElementById('availability').innerHTML = output;
        })
        .catch(error => {
            console.error('Error cargando el archivo:', error);
            document.getElementById('availability').innerHTML = `<p>Error al cargar los datos.</p>`;
        });
}
