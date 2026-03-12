// Remove loading screen after 800ms to simulate the actual website's boot
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 800);
});

// Logic to show individual mod details and hide the main grid
function showModDetails(modId) {
    // Hide grid
    document.getElementById('mods-grid').style.display = 'none';
    
    // Show details container
    document.getElementById('mod-details-container').style.display = 'block';
    
    // Hide all mod detail contents first
    const contents = document.getElementsByClassName('mod-detail-content');
    for(let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    
    // Show specifically requested mod
    document.getElementById(modId + '-details').style.display = 'block';
    
    // Scroll smoothly to the mod section
    document.getElementById('mods').scrollIntoView({ behavior: 'smooth' });
}

// Logic to return back to the full grid view
function showGrid() {
    // Hide details container
    document.getElementById('mod-details-container').style.display = 'none';
    
    // Show grid
    document.getElementById('mods-grid').style.display = 'grid';
    
    // Scroll smoothly to the mods section
    document.getElementById('mods').scrollIntoView({ behavior: 'smooth' });
}
