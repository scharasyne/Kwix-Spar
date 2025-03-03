document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    initializeEventListeners();
    loadDashboardData();
});

function checkAuthStatus() {
    // check if user is logged in by verifying session
    fetch('../php/check-auth.php')
        .then(response => response.json())
        .then(data => {
            if (!data.authenticated) {
                window.location.href = 'admin-login.html';
            } else {
                document.getElementById('admin-region').textContent = data.region;
            }
        })
        .catch(error => {
            console.error('Auth check failed:', error);
            window.location.href = 'admin-login.html';
        });
}

function initializeEventListeners() {
    // for logout
    document.getElementById('logout-btn').addEventListener('click', handleLogout);

    // to add new pwd card holder
    document.getElementById('add-pwd-btn').addEventListener('click', () => {
        document.getElementById('pwd-modal').classList.remove('hidden');
        document.getElementById('modal-title').textContent = 'Add New PWD ID Holder';
        document.getElementById('pwd-form').reset();
    });
    //cancel
    document.getElementById('cancel-pwd').addEventListener('click', () => {
        document.getElementById('pwd-modal').classList.add('hidden');
    });
    //submit form
    document.getElementById('pwd-form').addEventListener('submit', handleFormSubmit);
    //search input
    document.getElementById('search').addEventListener('input', debounce(handleSearch, 300));

    document.getElementById('filter-status').addEventListener('change', handleFilterChange);
}

function loadDashboardData() {
    // load stats
    fetch('../php/get-pwd-stats.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('total-pwd').textContent = data.total;
            document.getElementById('active-pwd').textContent = data.active;
            document.getElementById('expired-pwd').textContent = data.expired;
        })
        .catch(error => console.error('Error loading stats:', error));

    // load PWD records
    loadPWDRecords();
}

function loadPWDRecords(searchTerm = '', statusFilter = 'all') {
    fetch(`../php/get-pwd-records.php?search=${searchTerm}&status=${statusFilter}`)
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('pwd-records');
            tbody.innerHTML = '';

            data.forEach(record => {
                const row = createRecordRow(record);
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading records:', error));
}

function createRecordRow(record) {
    const tr = document.createElement('tr');
    const status = new Date(record.expiry_date) > new Date() ? 'Active' : 'Expired';
    const statusClass = status === 'Active' ? 'text-green-600' : 'text-red-600';

    tr.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">${record.pwd_id_number}</td>
        <td class="px-6 py-4 whitespace-nowrap">${record.first_name} ${record.last_name}</td>
        <td class="px-6 py-4 whitespace-nowrap">${record.city}</td>
        <td class="px-6 py-4 whitespace-nowrap">${record.disability_type}</td>
        <td class="px-6 py-4 whitespace-nowrap">${record.expiry_date}</td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">
                ${status}
            </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <button onclick="editRecord('${record.id}')" class="text-[#1B3A57] hover:text-[#2C5A84] mr-3">Edit</button>
            <button onclick="deleteRecord('${record.id}')" class="text-red-600 hover:text-red-900">Delete</button>
        </td>
    `;

    return tr;
}

async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
        const response = await fetch('../php/save-pwd-record.php', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            document.getElementById('pwd-modal').classList.add('hidden');
            loadDashboardData();
        } else {
            alert(data.message || 'Error saving record');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error saving record');
    }
}

function handleLogout() {
    fetch('../php/logout.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = 'admin-login.html';
            }
        })
        .catch(error => console.error('Logout failed:', error));
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleSearch(e) {
    const searchTerm = e.target.value;
    const statusFilter = document.getElementById('filter-status').value;
    loadPWDRecords(searchTerm, statusFilter);
}

function handleFilterChange(e) {
    const statusFilter = e.target.value;
    const searchTerm = document.getElementById('search').value;
    loadPWDRecords(searchTerm, statusFilter);
}

async function editRecord(id) {
    try {
        const response = await fetch(`../php/get-pwd-record.php?id=${id}`);
        const record = await response.json();
        
        document.getElementById('modal-title').textContent = 'Edit PWD ID Holder';
        document.getElementById('pwd-id').value = record.pwd_id_number;
        document.getElementById('first-name').value = record.first_name;
        document.getElementById('last-name').value = record.last_name;
        document.getElementById('city').value = record.city;
        document.getElementById('disability-type').value = record.disability_type;
        document.getElementById('expiry-date').value = record.expiry_date;
        
        document.getElementById('pwd-modal').classList.remove('hidden');
    } catch (error) {
        console.error('Error loading record:', error);
        alert('Error loading record');
    }
}

async function deleteRecord(id) {
    if (confirm('Are you sure you want to delete this record?')) {
        try {
            const response = await fetch('../php/delete-pwd-record.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id })
            });
            const data = await response.json();

            if (data.success) {
                loadDashboardData();
            } else {
                alert(data.message || 'Error deleting record');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error deleting record');
        }
    }
} 