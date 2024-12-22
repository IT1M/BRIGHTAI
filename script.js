document.addEventListener('DOMContentLoaded', function () {
    // تفعيل الأسئلة الشائعة
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');

            // Close other open items if needed.
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle visibility of the clicked item's answer
            if (item.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });

    // Modal functionality for "About Us" section
    const readMoreBtn = document.querySelector('.read-more-btn');
    const aboutModal = document.getElementById('aboutModal');
    const closeAboutModalBtn = document.querySelector('#aboutModal .close-modal');

    readMoreBtn.addEventListener('click', function () {
        aboutModal.style.display = 'block';
    });

    closeAboutModalBtn.addEventListener('click', function () {
         aboutModal.style.display = 'none';
    });

     window.addEventListener('click', function (event) {
        if (event.target ==  aboutModal) {
             aboutModal.style.display = "none";
        }
    });

    // Service details modal functionality
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const learnMoreBtn = card.querySelector('.learn-more-btn');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', (event) => {
                event.preventDefault();
                const serviceId = card.getAttribute('data-service');
                const serviceModal = document.getElementById(serviceId);
                if (serviceModal) {
                    serviceModal.style.display = 'block';
                }
            });
        }
    });

    // Close service modal
      const closeServiceModalButtons = document.querySelectorAll('.service-modal .close-modal');
        closeServiceModalButtons.forEach(closeButton => {
        closeButton.addEventListener('click', (event) => {
            const serviceModal = closeButton.closest('.service-modal');
            if (serviceModal) {
                serviceModal.style.display = 'none';
            }
        });
    });
     window.addEventListener('click', function (event) {
        if (event.target.classList.contains('service-modal')) {
            event.target.style.display = 'none';
        }
    });
});

window.addEventListener('load', function () {
    // Array of canvas IDs
    const canvasIds = [
        'animated-bg-hero',
        'animated-bg-services',
        'animated-bg-about',
        'animated-bg-stats',
        'animated-bg-testimonials',
        'animated-bg-faq',
        'animated-bg-partners',
        'animated-bg-newsletter',
        'animated-bg-footer'
    ];

    canvasIds.forEach(canvasId => {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to match parent container
         canvas.width = window.innerWidth;
        canvas.height = canvas.parentElement.offsetHeight;

        let particlesArray = [];

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                   this.directionY = -this.directionY;
                }

                this.x += this.directionX;
                this.y += this.directionY;

                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            let numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = Math.random() * 3 + 1;
                 let x = Math.random() * (canvas.width - size * 2) + size;
                 let y = Math.random() * (canvas.height - size * 2) + size;
                let directionX = Math.random() * 2 - 1;
                let directionY = Math.random() * 2 - 1;
                let color = '#ffffff';

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            requestAnimationFrame(animate);
        }

        // Resize canvas and redraw particles on window resize
        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
           canvas.height = canvas.parentElement.offsetHeight;
            init();
        });

        init();
        animate();
    });
});
