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

// Add logo dynamically at the end of the script
const logo = document.createElement("img");
logo.src = "https://raw.githubusercontent.com/drakomine/Darkmineimage/main/Gemini_Generated_Image_40k3u840k3u840k3.png";
logo.alt = "Website Logo";
logo.style.height = "50px";

const header = document.querySelector("header");
if (header) {
    header.prepend(logo);
} else {
    console.error("Header element not found. Logo not added.");
}
