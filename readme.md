# Images Folder

This folder contains all images used in the Btechnologies website.

Subfolders:
- services/ - Contains images related to services
- slider/ - Contains images for the image sliders
\`\`\`

## 2. Update the services.html page to include the image slider

```html project="Btechnologies Website" file="services.html" type="html"
&lt;!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services - Btechnologies</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    &lt;!-- Header with Flexbox Navigation -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1>BTECHNOLOGIES</h1>
                </div>
                <nav class="nav">
                    <button class="nav-toggle" id="navToggle">
                        <i class="fas fa-bars" id="menuIcon"></i>
                    </button>
                    <ul class="nav-menu" id="navMenu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html" class="active">Services</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    &lt;!-- Image Slider Section -->
    <section class="slider-section">
        <div class="container">
            <div class="section-header">
                <h2>Our Work in Action</h2>
                <p>See our expert technicians installing and configuring network solutions</p>
            </div>
            
            <div class="slider-container">
                <div class="slider">
                    <div class="slide active">
                        <img src="https://img.freepik.com/free-photo/african-american-it-specialist-working-server-room_23-2149008863.jpg?w=1380&t=st=1715795654~exp=1715796254~hmac=e3a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0" alt="Black woman IT specialist working in server room">
                        <div class="slide-content">
                            <h3>Network Infrastructure Setup</h3>
                            <p>Our certified technicians ensure your network infrastructure is properly configured for optimal performance.</p>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://img.freepik.com/free-photo/african-american-technician-installing-wifi-router_23-2149008865.jpg?w=1380&t=st=1715795700~exp=1715796300~hmac=e3a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0" alt="Black woman technician installing WiFi router">
                        <div class="slide-content">
                            <h3>WiFi Router Installation</h3>
                            <p>Professional installation of WiFi routers to ensure maximum coverage and signal strength.</p>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://img.freepik.com/free-photo/african-american-woman-installing-network-extender_23-2149008870.jpg?w=1380&t=st=1715795750~exp=1715796350~hmac=e3a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0" alt="Black woman installing network extender">
                        <div class="slide-content">
                            <h3>Network Extender Setup</h3>
                            <p>Eliminate dead zones with professionally installed network extenders for complete home coverage.</p>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://img.freepik.com/free-photo/african-american-technician-configuring-home-network_23-2149008875.jpg?w=1380&t=st=1715795800~exp=1715796400~hmac=e3a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0" alt="Black woman technician configuring home network">
                        <div class="slide-content">
                            <h3>Home Network Configuration</h3>
                            <p>Expert configuration of your home network for security, speed, and reliability.</p>
                        </div>
                    </div>
                </div>
                
                <div class="slider-controls">
                    <button class="slider-btn prev" aria-label="Previous slide">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="slider-dots">
                        <span class="dot active" data-slide="0"></span>
                        <span class="dot" data-slide="1"></span>
                        <span class="dot" data-slide="2"></span>
                        <span class="dot" data-slide="3"></span>
                    </div>
                    <button class="slider-btn next" aria-label="Next slide">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    &lt;!-- Services Section -->
    <section class="features" id="services">
        <div class="container">
            <div class="section-header">
                <h2>Our Services</h2>
                <p>Comprehensive technical support solutions for your connectivity needs</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-wifi"></i>
                    </div>
                    <h3>Fibre Tech Support</h3>
                    <p>Expert installation and troubleshooting for high-speed fibre connections, Boosters and Extender supply and installations. We ensure your fibre connection is optimized for maximum performance.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-broadcast-tower"></i>
                    </div>
                    <h3>LTE Tech Support</h3>
                    <p>Specialized assistance for wireless LTE networks and connectivity issues. Our technicians can help you set up, troubleshoot, and optimize your LTE connection for reliable internet access.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-laptop-house"></i>
                    </div>
                    <h3>Remote Tech Support</h3>
                    <p>Convenient technical assistance from anywhere without on-site visits. Our remote support team can diagnose and fix many issues without the need for a technician to visit your location.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-headset"></i>
                    </div>
                    <h3>24/7 Helpdesk</h3>
                    <p>Round-the-clock support for urgent technical issues and emergencies. Our helpdesk is available 24/7 to ensure you're never left without assistance when you need it most.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-network-wired"></i>
                    </div>
                    <h3>Network Setup & Configuration</h3>
                    <p>Professional setup and configuration of home and business networks. We ensure your network is secure, optimized, and meets your specific requirements.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Security Solutions</h3>
                    <p>Comprehensive security solutions to protect your network and devices. We implement robust security measures to safeguard your digital assets and privacy.</p>
                </div>
            </div>
        </div>
    </section>

    &lt;!-- Internet Extenders Showcase Section -->
    <section class="extenders-showcase">
        <div class="container">
            <div class="section-header">
                <h2>Internet Extenders & Equipment</h2>
                <p>Quality hardware solutions to enhance your connectivity experience</p>
            </div>
            
            <div class="product-slider-container">
                <div class="product-slider">
                    <div class="product-slide active">
                        <div class="product-image">
                            <img src="https://img.freepik.com/free-photo/wifi-router-with-woman-background_23-2149008880.jpg?w=1380&t=st=1715795900~exp=1715796500~hmac=e3a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0" alt="WiFi Mesh System with Black woman technician">
                        </div>
                        <div class="product-info">
                            <h3>WiFi Mesh Systems</h3>
                            <p>Advanced mesh systems provide seamless coverage throughout your entire home, eliminating dead zones and ensuring consistent connectivity in every room.</p>
                            <ul class="product-features">
                                <li><i class="fas fa-check"></i> Whole-home coverage</li>
                                <li><i class="fas fa-check"></i> Easy setup and management</li>
                                <li><i class="fas fa-check"></i> Seamless roaming between access points</li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-slide">
                        <div class="product-image">
                            <img src="https://img.freepik.com/free-photo/wifi-extender-with-technician-background_23-2149008885.jpg?w=1380&t=st=1715795950~exp=1715796550~hmac=e3a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0" alt="WiFi Range Extender with Black woman technician">
                        </div>
                        <div class="product-info">
                            <h3>WiFi Range Extenders</h3>
                            <p>Boost your existing WiFi signal to reach areas of your home or office that previously had weak or no connectivity.</p>
                            <ul class="product-features">
                                <li><i class="fas fa-check"></i> Extends existing WiFi network</li>
                                <li><i class="fas fa-check"></i> Simple plug-and-play setup</li>
                                <li><i class="fas fa-check"></i> Compatible with all router brands</li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-slide">
                        <div class="product-image">
                            <img src="https://img.freepik.com/free-photo/powerline-adapter-with-technician-installing_23-2149008890.jpg?w=1380&t=st=1715796000~exp=1715796600~hmac=e3a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0" alt="Powerline Adapters with Black woman technician">
                        </div>
                        <div class="product-info">
                            <h3>Powerline Adapters</h3>
                            <p>Use your home's electrical wiring to extend your internet connection to any room with an electrical outlet.</p>
                            <ul class="product-features">
                                <li><i class="fas fa-check"></i> No new wiring needed</li>
                                <li><i class="fas fa-check"></i> Stable connection through walls</li>
                                <li><i class="fas fa-check"></i> Ideal for multi-story buildings</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="product-slider-controls">
                    <button class="product-slider-btn prev" aria-label="Previous product">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="product-slider-dots">
                        <span class="product-dot active" data-slide="0"></span>
                        <span class="product-dot" data-slide="1"></span>
                        <span class="product-dot" data-slide="2"></span>
                    </div>
                    <button class="product-slider-btn next" aria-label="Next product">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    &lt;!-- Footer with Flexbox -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <h2>BTECHNOLOGIES</h2>
                    <p>Your Connection, Our Passion</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 BTECHNOLOGIES. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
    <script src="js/slider.js"></script>
</body>
</html>