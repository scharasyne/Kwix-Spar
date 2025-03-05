document.addEventListener('DOMContentLoaded', function() {
    const regionSelect = document.getElementById('region');
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    
    // Complete hierarchy data
    const regions = {
        'NCR - National Capital Region': {
            'Metro Manila': ['Quezon City', 'Manila', 'Makati', 'Pasig', 'Taguig', 'Las Piñas City']
        },
        'CAR - Cordillera Administrative Region': {
            'Benguet': ['Baguio City', 'La Trinidad', 'Itogon', 'Sablan', 'Tuba']
        },
        'BARMM - Bangsamoro Autonomous Region in Muslim Mindanao': {
            'Basilan': ['Lamitan', 'Isabela City', 'Tipo-Tipo', 'Tuburan', 'Maluso']
        }
    };

    // Populate regions
    Object.keys(regions).forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });

    // Handle region selection
    regionSelect.addEventListener('change', function() {
        provinceSelect.innerHTML = '<option value="">Select Province</option>';
        citySelect.innerHTML = '<option value="">Select City/Municipality</option>';
        provinceSelect.disabled = true;
        citySelect.disabled = true;

        if (this.value) {
            const provinces = regions[this.value];
            Object.keys(provinces).forEach(province => {
                const option = document.createElement('option');
                option.value = province;
                option.textContent = province;
                provinceSelect.appendChild(option);
            });
            provinceSelect.disabled = false;
        }
    });

    // Handle province selection
    provinceSelect.addEventListener('change', function() {
        citySelect.innerHTML = '<option value="">Select City/Municipality</option>';
        citySelect.disabled = true;

        if (this.value && regionSelect.value) {
            const cities = regions[regionSelect.value][this.value];
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
            citySelect.disabled = false;
        }
    });

    // Handle form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(loginForm);
        try {
            const url = '/Kwix-Spar/php/admin-login.php';
            console.log('Attempting fetch to:', url);
            
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Server response:', data);

            if (data.success) {
                window.location.href = 'admin-dashboard.html';
            } else {
                alert(data.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Full error:', error);
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Current page URL:', window.location.href);
            alert('Connection error. Please check:\n' +
                  '1. XAMPP is running (Apache)\n' +
                  '2. Project is in htdocs folder\n' +
                  '3. Accessing via localhost\n' +
                  'Error: ' + error.message);
        }
    });
}); 