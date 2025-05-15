// Enhanced JavaScript for mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.getElementById('menuIcon');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Toggle between hamburger and X icon
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking a nav link on mobile
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const issue = document.getElementById('issue');
            
            // Simple validation - check if fields are empty
            if (!name.value.trim()) {
                isValid = false;
                highlightField(name, true);
            } else {
                highlightField(name, false);
            }
            
            if (!email.value.trim() || !validateEmail(email.value)) {
                isValid = false;
                highlightField(email, true);
            } else {
                highlightField(email, false);
            }
            
            if (!phone.value.trim()) {
                isValid = false;
                highlightField(phone, true);
            } else {
                highlightField(phone, false);
            }
            
            if (!issue.value.trim()) {
                isValid = false;
                highlightField(issue, true);
            } else {
                highlightField(issue, false);
            }
            
            if (isValid) {
                // In a real application, you would submit the form data to a server here
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields correctly.');
            }
        });
    }
    
    // Helper function to validate email format
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Helper function to highlight invalid fields
    function highlightField(field, isInvalid) {
        if (isInvalid) {
            field.style.borderColor = '#e53e3e';
            field.style.backgroundColor = '#fff5f5';
        } else {
            field.style.borderColor = '';
            field.style.backgroundColor = '';
        }
    }
});