document.addEventListener('DOMContentLoaded', () => {
    document.body.style.direction = 'rtl';

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // تأثيرات التمرير (Scroll Animations)
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // تأثيرات البطاقات عند التمرير عليها
    const agentCards = document.querySelectorAll('.agent-card');
    agentCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotateY(10deg)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.7)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        });
    });

    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'translateY(-10px) rotateY(10deg)';
            feature.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.7)';
        });

        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'translateY(0)';
            feature.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        });
    });

    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', () => {
            testimonial.style.transform = 'translateY(-10px) rotateY(10deg)';
            testimonial.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.7)';
        });

        testimonial.addEventListener('mouseleave', () => {
            testimonial.style.transform = 'translateY(0)';
            testimonial.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        });
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) rotateY(10deg)';
            item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.7)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        });
    });

    // تفاعلات البانر الرئيسي (Hero Section)
    const heroSection = document.getElementById('hero');
    const heroContent = document.querySelector('.hero-content');
    const hero3dElements = document.querySelector('.hero-3d-elements');

    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const offsetX = (x - centerX) / 100;
        const offsetY = (y - centerY) / 100;

        heroContent.style.transform = `translateZ(50px) rotateX(${offsetY * 0.5}deg) rotateY(${offsetX * 0.5}deg)`;
        hero3dElements.style.transform = `translateX(${offsetX * 2}px) translateY(${offsetY * 2}px)`;
    });

    heroSection.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'translateZ(50px) rotateX(0deg) rotateY(0deg)';
        hero3dElements.style.transform = 'translateX(0px) translateY(0px)';
    });

    // إضافة وظائف المودال
    const modalTriggers = document.querySelectorAll('.more-details');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('show');
        });
    });

    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.classList.remove('show');
        });
    });

    // إغلاق المودال عند النقر خارجه
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });
});