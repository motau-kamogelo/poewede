// script.js

// Basic example: Adding an event listener to the "Learn More" button on the homepage
document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.querySelector('.hero .cta-buttons .secondary');

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior (if it's an <a> tag)
            alert('You clicked the Learn More button!');
            // You can add more sophisticated logic here, like scrolling to a specific section
        });
    }

    // Example: Handling form submission on the contact page
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            alert('Message sent successfully!');
            // In a real application, you would send this data to a server
            this.reset(); // Clear the form after submission
        });
    }

    // Example: Basic navigation highlighting (already done with CSS .active class)
    // You could add JavaScript to dynamically add/remove the 'active' class
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Example: Simple animation on the hero image (you'll need to define CSS for this)
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.classList.add('fade-in'); // Assuming you have a .fade-in class in your CSS
    }
});
