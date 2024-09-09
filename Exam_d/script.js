const tableBody = document.getElementById('tbody');
const insertForm = document.getElementById('insert_form');
const insertButton = document.getElementById('insert_button');

insertButton.addEventListener('click', () => {
    const name = insertForm.name.value;
    const age = insertForm.age.value;
    const gender = insertForm.gender.value;

    if (!name || !age || !gender) {
        return;
    }

    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    const nameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const genderCell = document.createElement('td');

    idCell.textContent = tableBody.rows.length + 1;
    nameCell.textContent = name;
    ageCell.textContent = age;
    genderCell.textContent = gender;

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(genderCell);

    tableBody.appendChild(row);
    insertForm.reset();
});
