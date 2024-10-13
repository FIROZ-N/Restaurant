const menu = document.querySelector('.navbar-menu');
const openBtn = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.menu-close');
const menuLinks = document.querySelectorAll('.navbar-menu a'); // All links inside the menu
let autoCloseTimeout; // Timeout variable for auto-closing

function openMenu() {
    menu.classList.add('open');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';

    // Start auto-close timer (e.g., 5 seconds of inactivity)
    resetAutoCloseTimer();
}

function closeMenu() {
    menu.classList.remove('open');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';

    // Clear the timeout to prevent closing if already closed
    clearTimeout(autoCloseTimeout);
}

// Reset the auto-close timer when any interaction happens
function resetAutoCloseTimer() {
    clearTimeout(autoCloseTimeout); // Clear the previous timer
    autoCloseTimeout = setTimeout(closeMenu, 5000); // Set a new timer for 5 seconds
}

// Add event listeners for resetting the timer on any interaction
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !openBtn.contains(e.target) && !closeBtn.contains(e.target)) {
        // Click outside the menu and buttons, close the menu
        closeMenu();
    } else {
        // Reset the timer if there's interaction with the menu or buttons
        resetAutoCloseTimer();
    }
});

// Optional: Reset the timer on mouseover and keypress to detect user activity
menu.addEventListener('mousemove', resetAutoCloseTimer);
document.addEventListener('keydown', resetAutoCloseTimer);

// Close the menu when any link inside the menu is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
