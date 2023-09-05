 
 document.getElementById('AddButton').addEventListener('click', ()=> {
    
    const site = document.getElementById('Site').value;
    const username = document.getElementById('UserName').value;
    const password = document.getElementById('Passwords').value;

   
    const entry = { site, username, password };

    
    let entries = JSON.parse(localStorage.getItem('passwordEntries')) || [];

   
    entries.push(entry);

    
    localStorage.setItem('passwordEntries', JSON.stringify(entries));

    
    document.getElementById('Site').value = '';
    document.getElementById('UserName').value = '';
    document.getElementById('Passwords').value = '';

    
    updateTable();
});

// updating the table from local storage
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


updateTable();





document.getElementById('del').addEventListener('click',()=>{
    localStorage.clear()
    location.reload()
})