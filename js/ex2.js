// Question 17 - React to Events
// Emmanuel Mejia

// Character list. Each house has a name and a code
const houses = [
    { code: "ST", name: "Stark", characters: ["Eddard Stark", "Catelyn Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Bran Stark", "Rickon Stark"] },
    { code: "LA", name: "Lannister", characters: ["Tywin Lannister", "Cersei Lannister", "Jaime Lannister", "Tyrion Lannister"] },
    { code: "TA", name: "Targaryen", characters: ["Daenerys Targaryen", "Viserys Targaryen", "Aerys II Targaryen"] },
    { code: "BA", name: "Baratheon", characters: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon"] },
];

// Populate the dropdown with house options
const houseSelect = document.getElementById('house');
houses.forEach(house => {
    const option = document.createElement('option');
    option.value = house.code;
    option.textContent = house.name;
    houseSelect.appendChild(option);
});

// Function to display characters based on selected house
houseSelect.addEventListener('change', (event) => {
    const selectedHouseCode = event.target.value;
    const charactersList = document.getElementById('characters');
    charactersList.innerHTML = ''; // Clear previous characters

    if (selectedHouseCode) {
        const selectedHouse = houses.find(house => house.code === selectedHouseCode);
        selectedHouse.characters.forEach(character => {
            const li = document.createElement('li');
            li.textContent = character;
            charactersList.appendChild(li);
        });
    }
});
