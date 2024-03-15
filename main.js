// Function to load data from the API
async function loadDataFromAPI() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data from API');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Function to display data in the table
function displayData(data) {
    const dataTable = document.getElementById('dataTable');
    // Clear existing table data
    dataTable.innerHTML = '';
    // Create table headers
    const tableHeaders = '<tr><th>User ID</th><th>ID</th><th>Title</th><th>Completed</th></tr>';
    dataTable.innerHTML = tableHeaders;
    // Populate table with data
    data.forEach(item => {
        const row = `<tr><td>${item.userId}</td><td>${item.id}</td><td>${item.title}</td><td>${item.completed}</td></tr>`;
        dataTable.innerHTML += row;
    });
}

// Function to clear the table
function clearTable() {
    const dataTable = document.getElementById('dataTable');
    dataTable.innerHTML = ''; // Clear table content
}

// Event listeners for buttons
document.getElementById('loadDataBtn').addEventListener('click', loadDataFromAPI);
document.getElementById('clearTableBtn').addEventListener('click', clearTable);
