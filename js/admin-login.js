document.addEventListener('DOMContentLoaded', function() {
    // Populate regions
    const regions = [
        'NCR - National Capital Region',
        'CAR - Cordillera Administrative Region',
        'Region I - Ilocos Region',
        'Region II - Cagayan Valley',
        'Region III - Central Luzon',
        'Region IV-A - CALABARZON',
        'Region IV-B - MIMAROPA',
        'Region V - Bicol Region',
        'Region VI - Western Visayas',
        'Region VII - Central Visayas',
        'Region VIII - Eastern Visayas',
        'Region IX - Zamboanga Peninsula',
        'Region X - Northern Mindanao',
        'Region XI - Davao Region',
        'Region XII - SOCCSKSARGEN',
        'Region XIII - Caraga',
        'BARMM - Bangsamoro Autonomous Region in Muslim Mindanao'
    ];

    const regionSelect = document.getElementById('region');
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });

    // Handle form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(loginForm);
        try {
            console.log('Attempting login with:', {
                email: formData.get('email'),
                region: formData.get('region')
            });

            const response = await fetch('/php/admin-login.php', {
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
            console.error('Error details:', error);
            alert('Connection error: ' + error.message + '. Make sure XAMPP is running and the project is in the htdocs folder.');
        }
    });
}); 