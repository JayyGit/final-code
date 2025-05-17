// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Update active state in navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Find and activate the clicked nav item
    navItems.forEach(item => {
        if (item.getAttribute('onclick')?.includes(sectionId)) {
            item.classList.add('active');
        }
    });
}

// Initialize the page by showing account settings by default
document.addEventListener('DOMContentLoaded', function() {
    // Set the first nav item as active by default if none is active
    const activeItems = document.querySelectorAll('.nav-item.active');
    if (activeItems.length === 0) {
        const firstNavItem = document.querySelector('.nav-item');
        if (firstNavItem) {
            firstNavItem.classList.add('active');
        }
    }
    
    // Show the active section (or account-settings by default)
    const activeSection = document.querySelector('.content-section.active');
    if (!activeSection) {
        showSection('account-settings');
    }
});w