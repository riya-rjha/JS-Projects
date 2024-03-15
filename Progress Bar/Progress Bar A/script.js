const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const gradientEnd = document.getElementById('gradientEnd');

let progress = 0;
const updateInterval = 50; // Milliseconds between updates
const maxProgress = 65;

function updateProgress() {
    progress++;
    if (progress > maxProgress) {
        clearInterval(interval);
        progress = maxProgress; // Set progress to exactly 65
    }
    progressText.textContent = progress + '%';
    progressBar.style.strokeDashoffset = 520 - (520 * progress) / 100;

    // Calculate gradient transition
    const gradientProgress = progress / maxProgress; // Progress normalized to 0-1 range
    gradientEnd.setAttribute('offset', `${gradientProgress * 100}%`);
}

updateProgress(); // Initial update
const interval = setInterval(updateProgress, updateInterval);
