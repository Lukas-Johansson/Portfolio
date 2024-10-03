function toggleProject() {
    const projectDetails = document.getElementById('projectDetails');
    const arrowIcon = document.getElementById('arrow-icon');

    if (projectDetails.classList.contains('show')) {
        projectDetails.classList.remove('show');
        arrowIcon.src = '/images/openarrow.svg';
    } else {
        projectDetails.classList.add('show');
        arrowIcon.src = '/images/closearrow.svg';
    }
}
