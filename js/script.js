// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

// Hamburger menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Create or remove overlay
        let overlay = document.querySelector('.menu-overlay');
        if (!overlay && navMenu.classList.contains('active')) {
            overlay = document.createElement('div');
            overlay.className = 'menu-overlay';
            document.body.appendChild(overlay);
            
            // Close menu when clicking overlay
            overlay.addEventListener('click', closeMenu);
            
            // Add active class with delay for animation
            setTimeout(() => {
                overlay.classList.add('active');
            }, 10);
        } else if (overlay && !navMenu.classList.contains('active')) {
            overlay.classList.remove('active');
            setTimeout(() => {
                if (overlay && overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    });
}

// Function to close menu
function closeMenu() {
    if (hamburger) {
        hamburger.classList.remove('active');
    }
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    body.classList.remove('menu-open');
    
    const overlay = document.querySelector('.menu-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            if (overlay && overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 300);
    }
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        closeMenu();
    }
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 3px 15px rgba(0, 0, 0, 0.05)';
        }
    }
});

// Close menu on window resize (if resized to desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});