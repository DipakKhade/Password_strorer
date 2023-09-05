 // Add an event listener to the "Add" button
 document.getElementById('AddButton').addEventListener('click', function () {
    // Get input values
    const site = document.getElementById('Site').value;
    const username = document.getElementById('UserName').value;
    const password = document.getElementById('Passwords').value;

    // Create an object to represent the entry
    const entry = { site, username, password };

    // Check if local storage already has data
    let entries = JSON.parse(localStorage.getItem('passwordEntries')) || [];

    // Add the new entry to the array
    entries.push(entry);

    // Store the updated array in local storage
    localStorage.setItem('passwordEntries', JSON.stringify(entries));

    // Clear input fields
    document.getElementById('Site').value = '';
    document.getElementById('UserName').value = '';
    document.getElementById('Passwords').value = '';

    // Update the table
    updateTable();
});

// Function to update the table from local storage
function updateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear the table body

    const entries = JSON.parse(localStorage.getItem('passwordEntries')) || [];

    for (const entry of entries) {
        const row = tableBody.insertRow();
        const siteCell = row.insertCell(0);
        const usernameCell = row.insertCell(1);
        const passwordCell = row.insertCell(2);

        siteCell.innerHTML = entry.site;
        usernameCell.innerHTML = entry.username;
        passwordCell.innerHTML = entry.password;
    }
}

// Load table data when the page loads
updateTable();



// for deleting the entries

document.getElementById('del').addEventListener('click',()=>{
    localStorage.clear()
    location.reload()
})