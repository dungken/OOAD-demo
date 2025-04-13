// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeNavigation();
    initializeModals();
    initializeForms();
    initializeTables();
});

// Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Không ngăn chặn hành vi mặc định nữa
            // e.preventDefault();
            const target = this.getAttribute('href');
            if (target !== '#') {
                // Không cần gọi navigateToPage nữa, để trình duyệt tự xử lý chuyển hướng
                // navigateToPage(target);
            }
        });
    });
}

// Modal handling
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModal(modal);
            });
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeModal(modal) {
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
});

// Close modal when clicking close button
document.querySelectorAll('.modal-close').forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal);
    });
});

// Form handling
function initializeForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted:', this.id);
        });
    });
}

// Table handling
function initializeTables() {
    const tables = document.querySelectorAll('.table');
    tables.forEach(table => {
        // Add sorting functionality
        const headers = table.querySelectorAll('th');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                sortTable(table, header);
            });
        });
    });
}

function sortTable(table, header) {
    const index = Array.from(header.parentElement.children).indexOf(header);
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const isAsc = header.classList.contains('asc');
    
    rows.sort((a, b) => {
        const aValue = a.children[index].textContent;
        const bValue = b.children[index].textContent;
        return isAsc ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
    });
    
    header.classList.toggle('asc');
    const tbody = table.querySelector('tbody');
    rows.forEach(row => tbody.appendChild(row));
}

// Utility functions
function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} animate-fadeIn`;
    alertDiv.textContent = message;
    
    document.body.appendChild(alertDiv);
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

function showLoading(element) {
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading-spinner';
    element.appendChild(loadingSpinner);
    element.disabled = true;
}

function hideLoading(element) {
    const spinner = element.querySelector('.loading-spinner');
    if (spinner) {
        spinner.remove();
    }
    element.disabled = false;
}

// Navigation function
function navigateToPage(page) {
    // Thực hiện chuyển hướng thực tế
    window.location.href = page;
}

// Table row actions
function deleteStudent(studentId) {
    if (confirm('Bạn có chắc chắn muốn xóa học sinh này?')) {
        console.log('Deleting student:', studentId);
        // Add your delete logic here
    }
}

function editStudent(studentId) {
    console.log('Editing student:', studentId);
    // Add your edit logic here
}

// Search and filter handling
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', function() {
        // Add your search/filter logic here
        console.log('Searching/filtering:', this.value);
    });
});

// Pagination handling
document.querySelectorAll('.pagination button').forEach(button => {
    button.addEventListener('click', function() {
        // Add your pagination logic here
        console.log('Changing page:', this.textContent);
    });
});

// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    // Add your initialization logic here
    console.log('Page loaded');
});

// Event Listeners
document.addEventListener('click', function(e) {
    // Handle alert close buttons
    if (e.target.classList.contains('alert-close')) {
        e.target.parentElement.remove();
    }
}); 