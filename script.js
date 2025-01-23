document.addEventListener('DOMContentLoaded', function() {
    fetch('data/schedule.json')
        .then(response => response.json())
        .then(data => {
            const scheduleDiv = document.getElementById('schedule');
            scheduleDiv.innerHTML = '';

            data.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `Cancha ${item.court} - ${item.time} - ${item.client}`;
                div.classList.add(item.paid ? 'paid' : 'unpaid');
                scheduleDiv.appendChild(div);
            });
        });

    const form = document.getElementById('rental-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const court = document.getElementById('court').value;
            const time = document.getElementById('time').value;
            const client = document.getElementById('client').value;
            const paid = document.getElementById('paid').value === 'yes';

            const newReservation = { court, time, client, paid };
            
            fetch('data/schedule.json')
                .then(response => response.json())
                .then(data => {
                    data.push(newReservation);
                    return fetch('data/schedule.json', {
                        method: 'PUT',
                        body: JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json' }
                    });
                })
                .then(() => alert('Reservación guardada'))
                .catch(err => console.error('Error:', err));
        });
    }
});
