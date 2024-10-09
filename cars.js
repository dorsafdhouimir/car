// Fonctionnalité de recherche
const searchInput = document.getElementById('srch');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const productTitles = document.querySelectorAll('.product-title');

    productTitles.forEach(title => {
        const text = title.textContent.toLowerCase();
        const productCard = title.closest('.product-previou');
        productCard.style.display = text.includes(filter) ? '' : 'none';
    });
});

// Fonctionnalité de filtrage
const checkboxes = document.querySelectorAll('.critereRecherche input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterCars);
});

function filterCars() {
    const selectedTypes = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked && checkbox.name === 'carType')
        .map(checkbox => checkbox.value);

    const selectedCapacity = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked && checkbox.name === 'capacity')
        .map(checkbox => checkbox.value);

    const productCards = document.querySelectorAll('.product-previou');

    productCards.forEach(card => {
        const type = card.querySelector('.type').textContent.toLowerCase();
        const capacity = card.querySelector('.product-details').children[2].textContent.toLowerCase();
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(type);
        const matchesCapacity = selectedCapacity.length === 0 || selectedCapacity.some(cap => capacity.includes(cap));

        card.style.display = matchesType && matchesCapacity ? '' : 'none';
    });
}

// Fonctionnalité de bouton "Rent Now"
const rentButtons = document.querySelectorAll('.button');
rentButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Car rented successfully!');
    });
});
