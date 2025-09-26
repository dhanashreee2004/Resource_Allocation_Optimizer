let taskIndex = 1;

document.getElementById('addRow').addEventListener('click', () => {
    const table = document.getElementById('taskTable');
    const row = table.insertRow();

    row.innerHTML = `
        <td><input name="tasks[${taskIndex}][name]" required></td>
        <td><input name="tasks[${taskIndex}][weight]" type="number" min="0" step="any" required></td>
        <td><input name="tasks[${taskIndex}][value]" type="number" min="0" step="any" required></td>
        <td><input name="tasks[${taskIndex}][extra]"></td>
        <td><button type="button" class="removeBtn">Remove</button></td>
    `;

    taskIndex++;
});

// Remove a row
document.getElementById('taskTable').addEventListener('click', e => {
    if(e.target.classList.contains('removeBtn')) {
        e.target.closest('tr').remove();
    }
});
