document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    initializeEventListeners();
    loadDashboardData();
});

function checkAuthStatus() {
    // check if user is logged in (verifying session
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
    // Load stats
    loadStats();
    
    // Load PWD records
    const searchTerm = document.getElementById('search').value;
    const statusFilter = document.getElementById('filter-status').value;
    loadPWDRecords(searchTerm, statusFilter);
}

function loadStats() {
    // Show loading state
    document.getElementById('total-pwd').textContent = 'Loading...';
    document.getElementById('active-pwd').textContent = 'Loading...';
    document.getElementById('expired-pwd').textContent = 'Loading...';

    fetch('../php/get-pwd-stats.php')
        .then(response => response.json())
        .then(result => {
            console.log('Stats response:', result); // Debug log

            if (!result.success) {
                throw new Error(result.message || 'Failed to load stats');
            }

            const stats = result.data;
            document.getElementById('total-pwd').textContent = stats.total;
            document.getElementById('active-pwd').textContent = stats.active;
            document.getElementById('expired-pwd').textContent = stats.expired;
        })
        .catch(error => {
            console.error('Error loading stats:', error);
            document.getElementById('total-pwd').textContent = 'Error';
            document.getElementById('active-pwd').textContent = 'Error';
            document.getElementById('expired-pwd').textContent = 'Error';
        });
}

function loadPWDRecords(searchTerm = '', statusFilter = 'all') {
    // Show loading state
    const tbody = document.getElementById('pwd-records');
    tbody.innerHTML = '<tr><td colspan="8" class="text-center py-4">Loading records...</td></tr>';

    fetch(`../php/get-pwd-records.php?search=${searchTerm}&status=${statusFilter}`)
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data); // Debug log
            tbody.innerHTML = '';

            if (!data.success) {
                throw new Error(data.message);
            }

            if (data.records.length === 0) {
                tbody.innerHTML = '<tr><td colspan="8" class="text-center py-4">No records found</td></tr>';
                return;
            }

            data.records.forEach(record => {
                const row = createRecordRow(record);
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-red-600">
                Error loading records: ${error.message}</td></tr>`;
        });
}

function createRecordRow(record) {
    const tr = document.createElement('tr');
    const status = new Date(record.id_expiry_date) > new Date() ? 'Active' : 'Expired';
    const statusClass = status === 'Active' ? 'text-green-600' : 'text-red-600';

    tr.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">${record.pwd_id_number || ''}</td>
        <td class="px-6 py-4 whitespace-nowrap">${record.first_name || ''} ${record.last_name || ''}</td>
        <td class="px-6 py-4 whitespace-nowrap">${record.city || ''}</td>
        <td class="px-6 py-4 whitespace-nowrap">${record.disability_type || ''}</td>
        <td class="px-6 py-4 whitespace-nowrap">${record.id_expiry_date || ''}</td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">
                ${status}
            </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <button onclick="viewRequirements('${record.id}')" class="text-blue-600 hover:text-blue-900">
                View Requirements
            </button>
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

    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Saving...';
    submitButton.disabled = true;

    try {
        // Debug: Log form data
        console.log('Form data being sent:');
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        const response = await fetch('../php/save-pwd-record.php', {
            method: 'POST',
            body: formData // FormData automatically sets the correct Content-Type
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Server response:', data);

        if (data.success) {
            document.getElementById('pwd-modal').classList.add('hidden');
            loadDashboardData();
            alert('Record saved successfully');
        } else {
            throw new Error(data.message || 'Error saving record');
        }
    } catch (error) {
        console.error('Full error:', error);
        alert('Error saving record: ' + error.message);
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
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

// Add function to view uploaded documents
function viewDocuments(recordId) {
    window.open(`../php/view-documents.php?record_id=${recordId}`, '_blank');
}

// Add function to view requirements
function viewRequirements(recordId) {
    // Create and show requirements modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full';
    modal.id = 'requirements-modal';
    
    modal.innerHTML = `
        <div class="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-white">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-medium text-gray-900">Submitted Requirements</h3>
                <button onclick="closeRequirementsModal()" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Close</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div id="requirements-content" class="space-y-4">
                Loading requirements...
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fetch and display requirements
    fetch(`../php/get-requirements.php?record_id=${recordId}`)
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('requirements-content');
            if (data.length === 0) {
                content.innerHTML = '<p class="text-gray-500">No requirements uploaded yet.</p>';
                return;
            }
            
            content.innerHTML = data.map(doc => `
                <div class="border rounded-lg p-4">
                    <div class="flex justify-between items-center">
                        <h4 class="font-medium text-gray-900">${doc.document_type_name}</h4>
                        <a href="${doc.file_path}" target="_blank" 
                           class="text-blue-600 hover:text-blue-800">
                            View Document
                        </a>
                    </div>
                    <p class="text-sm text-gray-500">Uploaded: ${new Date(doc.uploaded_at).toLocaleDateString()}</p>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Error loading requirements:', error);
            document.getElementById('requirements-content').innerHTML = 
                '<p class="text-red-500">Error loading requirements. Please try again.</p>';
        });
}

function closeRequirementsModal() {
    const modal = document.getElementById('requirements-modal');
    if (modal) {
        modal.remove();
    }
} 