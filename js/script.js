function toggleProject() {
    var projectDetails = document.getElementById("projectDetails");
    if (projectDetails.classList.contains("show")) {
        projectDetails.classList.remove("show");
    } else {
        projectDetails.classList.add("show");
    }
}