document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    const optionsContainer = document.getElementById('optionsContainer');
    const options = optionsContainer.querySelectorAll('.option');
    const selectedOptions = document.getElementById('selectedOptions');

    // Show options when clicking the input field
    searchInput.addEventListener('click', () => {
        optionsContainer.style.display = 'block';
        filterOptions(searchInput.value);
    });

    // Filter options based on input value
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        filterOptions(filter);
        clearBtn.style.display = searchInput.value ? 'block' : 'none';
    });

    // Clear the input field
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        optionsContainer.style.display = 'none';
        filterOptions('');
    });

    // Handle option selection
    options.forEach(option => {
        option.addEventListener('click', () => {
            const selectedDiv = document.createElement('div');
            selectedDiv.textContent = option.textContent;
            selectedDiv.classList.add('selected-option');
            selectedOptions.appendChild(selectedDiv);

            // Hide the options container
            optionsContainer.style.display = 'none';

            // Clear the search input
            searchInput.value = '';
            clearBtn.style.display = 'none';
            filterOptions('');

            // Remove selected option on click
            selectedDiv.addEventListener('click', () => {
                selectedOptions.removeChild(selectedDiv);
            });
        });
    });

    // Hide options container when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !optionsContainer.contains(event.target)) {
            optionsContainer.style.display = 'none';
        }
    });

    function filterOptions(filter) {
        options.forEach(option => {
            if (option.textContent.toLowerCase().includes(filter)) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        });
    }
});
