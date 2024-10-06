function toggleProject() {
    const projectDetails = document.getElementById('projectDetails');
    const arrowIcon = document.getElementById('arrow-icon');

    // Check screen width to disable toggle on mobile
    if (window.innerWidth <= 768) {
        // On mobile, always show the project details and set the close arrow
        projectDetails.classList.add('show');
        arrowIcon.src = 'images/closearrow.svg';
        return; // Do nothing further since toggle is disabled on mobile
    } else {
        // Toggle functionality for larger screens
        if (projectDetails.classList.contains('show')) {
            projectDetails.classList.remove('show');
            arrowIcon.src = 'images/openarrow.svg';
        } else {
            projectDetails.classList.add('show');
            arrowIcon.src = 'images/closearrow.svg';
        }
    }
}

// Function to auto-open the project menu on mobile when the page is loaded
function autoOpenOnMobile() {
    const projectDetails = document.getElementById('projectDetails');
    const arrowIcon = document.getElementById('arrow-icon');
    
    if (window.innerWidth <= 768) {
        // Automatically open project details and set the close arrow
        projectDetails.classList.add('show');
        arrowIcon.src = 'images/closearrow.svg';
    }
}

// Run autoOpenOnMobile when the page is loaded
window.addEventListener('load', autoOpenOnMobile);

// Optional: Add resize event listener to auto-open when switching to mobile size
window.addEventListener('resize', autoOpenOnMobile);
