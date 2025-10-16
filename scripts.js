function setupDropdown(btnId, listId) {
    const btn = document.getElementById(btnId);
    const list = document.getElementById(listId);

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        list.classList.toggle('show');
        document.querySelectorAll('.side-bar ul').forEach(ul => {
            if (ul !== list) ul.classList.remove('show');
        });
    });
}

setupDropdown('dropdownBtn-lifestyle', 'dropdownList-lifestyle');
setupDropdown('dropdownBtn-sports', 'dropdownList-sports');
setupDropdown('dropdownBtn-technology', 'dropdownList-technology');
setupDropdown('dropdownBtn-entertainment', 'dropdownList-entertainment');

document.addEventListener('click', function () {
    document.querySelectorAll('.side-bar ul').forEach(ul => ul.classList.remove('show'));
});


// Full functional search section
document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card');
    let found = false;

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const text = card.querySelector('.card-text').textContent.toLowerCase();
        if (title.includes(query) || text.includes(query)) {
            card.style.display = 'flex';
            card.classList.add('highlight');
            found = true;
        } else {
            card.style.display = 'none';
            card.classList.remove('highlight');
        }
    });

    if (!found) {
        alert('No results found for: ' + query);
    }
});

// Optional: highlight style for matched cards
const style = document.createElement('style');
style.innerHTML = `
.card.highlight {
    box-shadow: 0 0 0 2px #c6c6c6ff;
    transition: box-shadow 0.2s;
}
`;
document.head.appendChild(style);