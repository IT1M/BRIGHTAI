document.addEventListener('DOMContentLoaded', function() {
    // تعريف المتغيرات الأساسية
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cartModal');
    const closeCartModal = document.getElementById('closeCartModal');
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.querySelector('.cart-total');
    const paymentModal = document.getElementById('paymentModal');
    const products = document.querySelectorAll('.product');
    let cart = [];

    // دالة لتحديث عرض السلة
    function updateCartDisplay() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
            total += price * item.quantity;

            cartItems.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>السعر: ${item.price}</p>
                        <div class="quantity-controls">
                            <button onclick="updateQuantity('${item.id}', -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity('${item.id}', 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')">×</button>
                </div>
            `;
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        // تخزين السلة في localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // دالة لإضافة منتج إلى السلة
    window.addToCart = function(productId, productName, productPrice) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }
        updateCartDisplay();
    };

    // دالة لتحديث كمية المنتج
    window.updateQuantity = function(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                updateCartDisplay();
            }
        }
    };

    // دالة لإزالة منتج من السلة
    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
    };

    // إضافة معالجات الأحداث
    cartIcon.addEventListener('click', () => {
        cartModal.classList.add('active');
    });

    closeCartModal.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    // معالج زر الشراء
    products.forEach(product => {
        const buyButton = product.querySelector('.buy-button');
        buyButton.addEventListener('click', function(event) {
            event.preventDefault();
            const productId = product.dataset.productId;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('.price').textContent;
            addToCart(productId, productName, productPrice);
        });
    });

    // معالج زر إتمام الشراء
    document.querySelector('.checkout-button').addEventListener('click', () => {
        if (cart.length > 0) {
            cartModal.classList.remove('active');
            paymentModal.classList.add('active');
        }
    });

    // استعادة السلة من localStorage عند تحميل الصفحة
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }

    // إغلاق المودال عند النقر خارجه
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
});
