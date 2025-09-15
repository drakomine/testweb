// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close menu on link click (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});

// Copy IP Address to Clipboard
function copyIP() {
    const ipAddress = document.querySelector('.ip-address').textContent;
    navigator.clipboard.writeText(ipAddress).then(() => {
        alert("Server IP copied to clipboard: " + ipAddress);
    }).catch(err => {
        console.error('Failed to copy IP: ', err);
    });
}
