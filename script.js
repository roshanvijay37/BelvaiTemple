// Add this to your existing script.js
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('nav').classList.remove('active');
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Add this to highlight important dates
document.addEventListener('DOMContentLoaded', function() {
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

// Add this to your existing script.js
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', e => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = e.target.src;
        lightbox.classList.add('active');
    });
});

document.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
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