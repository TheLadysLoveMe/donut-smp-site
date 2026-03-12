// Function to hide loader
function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
}

// 1. Try to hide loader as soon as the page structure is ready
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(hideLoader, 1000); // 1 second delay like the original site
});

// 2. Fail-safe: If the page takes too long, hide it anyway after 3 seconds
setTimeout(hideLoader, 3000);

// Function to show individual mod details
function showModDetails(modId) {
    document.getElementById('mods-grid').style.display = 'none';
    document.getElementById('mod-details-container').style.display = 'block';
    
    // Hide all mod detail contents
    const contents = document.getElementsByClassName('mod-detail-content');
    for(let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    
    // Show specific mod
    document.getElementById(modId + '-details').style.display = 'block';
    window.scrollTo({ top: document.getElementById('mods').offsetTop - 100, behavior: 'smooth' });
}

// Function to return to the grid
function showGrid() {
    document.getElementById('mod-details-container').style.display = 'none';
    document.getElementById('mods-grid').style.display = 'grid';
    window.scrollTo({ top: document.getElementById('mods').offsetTop - 100, behavior: 'smooth' });
}
