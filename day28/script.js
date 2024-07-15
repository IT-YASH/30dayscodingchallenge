const data = [
    { name: "Yash Patel", date: "2003-12-21" },
    { name: "Devansh", date: "2004-06-12" },
    { name: "Rushabh", date: "2003-04-17" },
    { name: "Yash Tiwari", date: "2001-11-08" },
    { name: "Ankita", date: "2000-06-12" },
    { name: "Chaitali", date: "2001-07-12" },
    { name: "Nupur", date: "2003-11-25" },
    { name: "Isha", date: "1994-01-21" },
    { name: "Hemang", date: "1998-07-14" },
    { name: "Riya", date: "1998-11-17" }
];

const itemsPerPage = 3;
let currentPage = 1;
let filteredData = data;

const contentList = document.getElementById('content-list');
const sortBy = document.getElementById('sort-by');
const filterInput = document.getElementById('filter');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');

sortBy.addEventListener('change', updateContent);
filterInput.addEventListener('input', updateContent);
prevPageButton.addEventListener('click', () => changePage(-1));
nextPageButton.addEventListener('click', () => changePage(1));

function updateContent() {
    const sortValue = sortBy.value;
    const filterValue = filterInput.value.toLowerCase();

    filteredData = data.filter(item => item.name.toLowerCase().includes(filterValue));
    filteredData.sort((a, b) => {
        if (sortValue === 'name') {
            return a.name.localeCompare(b.name);
        } else {
            return new Date(a.date) - new Date(b.date);
        }
    });

    currentPage = 1;
    renderContent();
}

function renderContent() {
    contentList.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filteredData.slice(start, end);

    paginatedItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.date}`;
        contentList.appendChild(li);
    });

    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredData.length / itemsPerPage)}`;
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === Math.ceil(filteredData.length / itemsPerPage);
}

function changePage(direction) {
    currentPage += direction;
    renderContent();
}

updateContent();
