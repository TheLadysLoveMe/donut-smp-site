// Function to count up numbers
function animateValue(id, start, end, duration, suffix = "") {
    const obj = document.getElementById(id);
    if (!obj) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        
        // Format numbers for the "K" in 50K
        if (end >= 1000) {
            obj.innerHTML = (currentCount / 1000).toFixed(0) + "K+";
        } else if (id === "stat-safe") {
            obj.innerHTML = currentCount + "%";
        } else if (id === "stat-support") {
            obj.innerHTML = currentCount + "/7";
        } else {
            obj.innerHTML = currentCount + suffix;
        }

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Function to hide loader and start animations
function initSite() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            
            // Start the counting animations after loader is gone
            animateValue("stat-downloads", 0, 50000, 2000); // Counts to 50K
            animateValue("stat-safe", 0, 100, 2000);      // Counts to 100%
            animateValue("stat-support", 0, 24, 2000);   // Counts to 24/7
            
        }, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(initSite, 1000);
});

// Navigation Logic
function showModDetails(modId) {
    document.getElementById('mods-grid').style.display = 'none';
    document.getElementById('mod-details-container').style.display = 'block';
    const contents = document.getElementsByClassName('mod-detail-content');
    for(let i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(modId + '-details').style.display = 'block';
    window.scrollTo({ top: document.getElementById('mods').offsetTop - 100, behavior: 'smooth' });
}

function showGrid() {
    document.getElementById('mod-details-container').style.display = 'none';
    document.getElementById('mods-grid').style.display = 'grid';
    window.scrollTo({ top: document.getElementById('mods').offsetTop - 100, behavior: 'smooth' });
}
