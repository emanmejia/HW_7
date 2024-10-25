// Country List
// Emmanuel Mejia 

const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria", // Corrected spelling
    "Azerbaijan" // Corrected spelling
];

const input = document.getElementById('country');
const suggestionsDiv = document.getElementById('suggestions');

input.addEventListener('input', () => {
    const inputValue = input.value.toLowerCase();
    suggestionsDiv.innerHTML = ''; // Clear previous suggestions

    if (inputValue.startsWith('a')) {
        const filteredCountries = countryList.filter(country => 
            country.toLowerCase().startsWith(inputValue)
        );

        filteredCountries.forEach(country => {
            const suggestion = document.createElement('div');
            suggestion.textContent = country;
            suggestion.classList.add('suggestion');
            suggestion.addEventListener('click', () => {
                input.value = country;
                suggestionsDiv.innerHTML = ''; // Clear suggestions
            });
            suggestionsDiv.appendChild(suggestion);
        });
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', (event) => {
    if (event.target !== input) {
        suggestionsDiv.innerHTML = '';
    }
});
