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

    // Modal functionality
    const readMoreBtn = document.querySelector('.read-more-btn');
    const modal = document.getElementById('aboutModal');
    const closeModalBtn = document.querySelector('.close-modal');

    readMoreBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
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
    document.querySelectorAll('.service-modal .close-modal').forEach(closeButton => {
        closeButton.addEventListener('click', (event) => {
                const serviceModal = closeButton.closest('.service-modal');
                if (serviceModal) {
                    serviceModal.style.display = 'none';
                }
        })
    });

    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('service-modal')) {
            event.target.style.display = 'none';
        }
    });
});