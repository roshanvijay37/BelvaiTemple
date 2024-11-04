document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking menu items
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});document.addEventListener('DOMContentLoaded', function() {
    const dates = document.querySelectorAll('p:contains("28-10-2024")');
    dates.forEach(date => {
        const text = date.innerHTML;
        date.innerHTML = text.replace(/(\d{2}-\d{2}-\d{4})/g, '<span class="important-date">$1</span>');
    });
});

// Add smooth reveal animation for sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add scroll progress indicator
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
});

let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-item img');

// Open lightbox with clicked image
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        currentImageIndex = index;
        lightboxImg.src = image.src;
        lightbox.classList.add('active');
    });
});

// Previous button click handler
document.querySelector('.prev-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById('lightbox-img').src = galleryImages[currentImageIndex].src;
});

// Next button click handler
document.querySelector('.next-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    document.getElementById('lightbox-img').src = galleryImages[currentImageIndex].src;
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        document.getElementById('lightbox-img').src = galleryImages[currentImageIndex].src;
    }
    
    if (e.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        document.getElementById('lightbox-img').src = galleryImages[currentImageIndex].src;
    }
});document.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    scale = 1; // Reset zoom level
    document.getElementById('lightbox-img').style.transform = `scale(${scale})`;
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

let scale = 1;
document.querySelector('.zoom-in').addEventListener('click', () => {
    scale *= 1.2;
    document.getElementById('lightbox-img').style.transform = `scale(${scale})`;
});

document.querySelector('.zoom-out').addEventListener('click', () => {
    scale /= 1.2;
    document.getElementById('lightbox-img').style.transform = `scale(${scale})`;
});