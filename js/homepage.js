const locationData = {
    Luzon: {
        'NCR': {
            'Metro Manila': ['Manila', 'Quezon City', 'Makati', 'Pasig']
        },
        'CAR': {
            'Benguet': ['Baguio City', 'La Trinidad', 'Tuba'],
            'Ifugao': ['Lagawe', 'Kiangan', 'Lamut']
        },
        'Region 1': {
            'Pangasinan': ['Dagupan City', 'Lingayen', 'Alaminos'],
            'La Union': ['San Fernando', 'Agoo', 'Bauang'],
            'Ilocos Norte': ['Laoag City', 'Batac', 'Paoay']
        }
    },
    Visayas: {
        'Region 6': {
            'Iloilo': ['Iloilo City', 'Oton', 'Pavia'],
            'Negros Occidental': ['Bacolod City', 'Silay', 'Talisay']
        },
        'Region 7': {
            'Cebu': ['Cebu City', 'Mandaue City', 'Lapu-Lapu City'],
            'Bohol': ['Tagbilaran City', 'Panglao', 'Dauis']
        }
    },
    Mindanao: {
        'Region 10': {
            'Misamis Oriental': ['Cagayan de Oro', 'Gingoog', 'El Salvador'],
            'Bukidnon': ['Malaybalay', 'Valencia', 'Maramag']
        },
        'Region 11': {
            'Davao del Sur': ['Davao City', 'Digos City', 'Santa Cruz'],
            'Davao Oriental': ['Mati City', 'Lupon', 'Banaybanay']
        }
    }
};

// filter dropdown options based sa search input
function filterOptions(inputValue, options) {
    return options.filter(option => 
        option.toLowerCase().includes(inputValue.toLowerCase())
    );
}

// dropdown (for island and regions only, mas madali kasi makita, no need to search)
function setupSimpleDropdown(buttonId, dropdownId, options, onSelect) {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);

    const newButton = button.cloneNode(true);
    const newDropdown = dropdown.cloneNode(false);
    button.parentNode.replaceChild(newButton, button);
    dropdown.parentNode.replaceChild(newDropdown, dropdown);

    newDropdown.innerHTML = '<div class="py-1"></div>';
    const dropdownContent = newDropdown.querySelector('div');

    options.forEach(option => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100';
        a.textContent = option;
        dropdownContent.appendChild(a);
    });

    // dropdown
    newButton.addEventListener('click', (e) => {
        e.stopPropagation();
        newDropdown.classList.toggle('hidden');
    });

    //selection
    newDropdown.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            e.stopPropagation();
            newButton.textContent = e.target.textContent;
            newDropdown.classList.add('hidden');
            if (onSelect) {
                onSelect(e.target.textContent);
            }
        }
    });
    document.addEventListener('click', (e) => {
        if (!newButton.contains(e.target) && !newDropdown.contains(e.target)) {
            newDropdown.classList.add('hidden');
        }
    });
}

//searchable dropdown (para sa province and city na kasi mas marami)
function setupSearchableDropdown(containerId, inputId, dropdownId, options, onSelect) {
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);

    const newInput = input.cloneNode(true);
    const newDropdown = dropdown.cloneNode(false);
    input.parentNode.replaceChild(newInput, input);
    dropdown.parentNode.replaceChild(newDropdown, dropdown);

    newInput.addEventListener('focus', () => {
        newDropdown.classList.remove('hidden');
        populateDropdown(newDropdown, options);
    });

    newInput.addEventListener('input', () => {
        const filteredOptions = filterOptions(newInput.value, options);
        populateDropdown(newDropdown, filteredOptions);
    });

    newDropdown.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            newInput.value = e.target.textContent;
            newDropdown.classList.add('hidden');
            if (onSelect) {
                onSelect(e.target.textContent);
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
            newDropdown.classList.add('hidden');
        }
    });
}

function populateDropdown(dropdown, options) {
    dropdown.innerHTML = '';
    options.forEach(option => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100';
        a.textContent = option;
        dropdown.appendChild(a);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const islandGroups = Object.keys(locationData);
    setupSimpleDropdown(
        'island-group-button',
        'island-group-dropdown',
        islandGroups,
        (selectedIslandGroup) => {
            console.log('Selected Island Group:', selectedIslandGroup); 

            document.getElementById('region-button').textContent = 'Select Region';
            document.getElementById('province-input').value = '';
            document.getElementById('city-input').value = '';
            
            //region container na
            document.getElementById('region-container').classList.remove('hidden');
            document.getElementById('province-container').classList.add('hidden');
            document.getElementById('city-container').classList.add('hidden');
            document.getElementById('validation-container').classList.add('hidden');

            //region options
            const regions = Object.keys(locationData[selectedIslandGroup]);
            console.log('Available Regions:', regions); 

            setupSimpleDropdown(
                'region-button',
                'region-dropdown',
                regions,
                (selectedRegion) => {
                    console.log('Selected Region:', selectedRegion); 

                    // reset + show province container
                    document.getElementById('province-input').value = '';
                    document.getElementById('city-input').value = '';
                    document.getElementById('province-container').classList.remove('hidden');
                    document.getElementById('city-container').classList.add('hidden');
                    document.getElementById('validation-container').classList.add('hidden');

                    // province options
                    const provinces = Object.keys(locationData[selectedIslandGroup][selectedRegion]);
                    console.log('Available Provinces:', provinces); 

                    setupSearchableDropdown(
                        'province-container',
                        'province-input',
                        'province-dropdown',
                        provinces,
                        (selectedProvince) => {
                            console.log('Selected Province:', selectedProvince); 

                            // Reset + show city container
                            document.getElementById('city-input').value = '';
                            document.getElementById('city-container').classList.remove('hidden');
                            document.getElementById('validation-container').classList.add('hidden');

                            const cities = locationData[selectedIslandGroup][selectedRegion][selectedProvince];
                            console.log('Available Cities:', cities); 

                            setupSearchableDropdown(
                                'city-container',
                                'city-input',
                                'city-dropdown',
                                cities,
                                () => {
                                    document.getElementById('validation-container').classList.remove('hidden');
                                }
                            );
                        }
                    );
                }
            );
        }
    );
});

document.getElementById('validate-button').addEventListener('click', () => {
    const pwdId = document.getElementById('pwd-id').value;
    // put the validate logic here, pwede rin yung para sa paglagay ng pic
    alert(`Validating ID: ${pwdId}`);
});