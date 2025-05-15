document.addEventListener('DOMContentLoaded', function() {
    // Main image slider functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentSlide = 0;
    
    // Initialize the slider
    function initSlider() {
        if (slides.length === 0) return; // Exit if no slides
        
        // Set up event listeners for dots
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                goToSlide(slideIndex);
            });
        });
        
        // Set up event listeners for buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                goToSlide(currentSlide - 1);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                goToSlide(currentSlide + 1);
            });
        }
        
        // Auto-advance slides every 5 seconds
        setInterval(function() {
            goToSlide(currentSlide + 1);
        }, 5000);
    }

    // Go to a specific slide
    function goToSlide(slideIndex) {
        // Handle wrapping around at the ends
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        
        // Remove active class from all slides and dots
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Add active class to current slide and dot
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
        
        // Update current slide index
        currentSlide = slideIndex;
    }
    
    // Product slider functionality
    const productSlides = document.querySelectorAll('.product-slide');
    const productDots = document.querySelectorAll('.product-dot');
    const productPrevBtn = document.querySelector('.product-slider-btn.prev');
    const productNextBtn = document.querySelector('.product-slider-btn.next');
    let currentProductSlide = 0;
    
    // Initialize the product slider
    function initProductSlider() {
        if (productSlides.length === 0) return; // Exit if no slides
        
        // Set up event listeners for dots
        productDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                goToProductSlide(slideIndex);
            });
        });
        
        // Set up event listeners for buttons
        if (productPrevBtn) {
            productPrevBtn.addEventListener('click', function() {
                goToProductSlide(currentProductSlide - 1);
            });
        }
        
        if (productNextBtn) {
            productNextBtn.addEventListener('click', function() {
                goToProductSlide(currentProductSlide + 1);
            });
        }
        
        // Auto-advance slides every 6 seconds
        setInterval(function() {
            goToProductSlide(currentProductSlide + 1);
        }, 6000);
    }
    
    // Go to a specific product slide
    function goToProductSlide(slideIndex) {
        // Handle wrapping around at the ends
        if (slideIndex < 0) {
            slideIndex = productSlides.length - 1;
        } else if (slideIndex >= productSlides.length) {
            slideIndex = 0;
        }
        
        // Remove active class from all slides and dots
        productSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        productDots.forEach(dot => {
            productDots.classList.remove('active');
        });
        
        // Add active class to current slide and dot
        productSlides[slideIndex].classList.add('active');
        productDots[slideIndex].classList.add('active');
        
        // Update current slide index
        currentProductSlide = slideIndex;
    }
    
    // Initialize both sliders
    initSlider();
    initProductSlider();
});