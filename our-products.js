document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
     const paymentModal = document.getElementById('paymentModal');
    const closeModalButton = document.getElementById('closeModal');
     const sendReceiptButton = document.getElementById('sendReceipt');

    let currentProductId = null;


    products.forEach(product => {
        const buyButton = product.querySelector('.buy-button');
        buyButton.addEventListener('click', function(event) {
            event.preventDefault();
             currentProductId = product.dataset.productId;
          paymentModal.classList.add('active');
        });
    });


    closeModalButton.addEventListener('click', function() {
        paymentModal.classList.remove('active');
         currentProductId = null;
    });

  sendReceiptButton.addEventListener('click', function() {
    if (currentProductId) {
           const whatsappMessage = `تم شراء المنتج رقم ${currentProductId}، وقد تم تحويل المبلغ.`;
           const whatsappURL = `https://wa.me/966501120781?text=${encodeURIComponent(whatsappMessage)}`;
           window.open(whatsappURL, '_blank');
           paymentModal.classList.remove('active');
           currentProductId = null;
         }
});
    window.addEventListener('click', function(event) {
    if (event.target === paymentModal) {
         paymentModal.classList.remove('active');
         currentProductId = null;
      }
    });
});