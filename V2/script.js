document.getElementById('medal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const country = document.getElementById('country').value;
    const gold = document.getElementById('gold').value;
    const silver = document.getElementById('silver').value;
    const bronze = document.getElementById('bronze').value;
    
    // Crear una nueva fila en la tabla
    const tableBody = document.getElementById('medal-table');
    const newRow = tableBody.insertRow();
    
    newRow.insertCell().textContent = country;
    newRow.insertCell().textContent = gold;
    newRow.insertCell().textContent = silver;
    newRow.insertCell().textContent = bronze;
    
    // Limpiar el formulario
    document.getElementById('medal-form').reset();
});