document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('nameInput').value;
    document.getElementById('output').textContent = `Nama Anda: ${name}`;
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('output').textContent = '';
    document.getElementById('nameInput').value = '';
});
