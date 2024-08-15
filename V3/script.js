document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('medal-form');
    const tableBody = document.getElementById('medal-table');

    // Función para agregar una fila a la tabla
    function addRow(medal) {
        const row = tableBody.insertRow();
        row.insertCell().textContent = medal.country;
        row.insertCell().textContent = medal.gold;
        row.insertCell().textContent = medal.silver;
        row.insertCell().textContent = medal.bronze;
    }

    // Enviar los datos del formulario al backend
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const country = document.getElementById('country').value;
        const gold = document.getElementById('gold').value;
        const silver = document.getElementById('silver').value;
        const bronze = document.getElementById('bronze').value;

        fetch('/api/medals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ country, gold, silver, bronze })
        })
        .then(response => response.json())
        .then(data => {
            addRow(data);
            form.reset();
        })
        .catch(error => console.error('Error:', error));
    });

    // Cargar medallas existentes al cargar la página
    fetch('/api/medals')
        .then(response => response.json())
        .then(medals => {
            medals.forEach(addRow);
        })
        .catch(error => console.error('Error:', error));
});
