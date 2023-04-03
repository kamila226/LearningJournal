const dropdown = document.getElementById("dropdown");

document.getElementById("hamburger").addEventListener('click', function() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
})
