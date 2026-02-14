document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate Hamburger
            const bars = document.querySelectorAll('.bar');
            if (navMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // --- Active Link Highlight (For Multi-page) ---
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    const pageName = currentPath.split("/").pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === pageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Scroll Animation (Fade In) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // --- Sticky Header Shadow ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // --- Form Handling ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting LittleMaker Cambodia! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // --- Product Filtering Logic (Only runs on products page) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        const productCards = document.querySelectorAll('.product-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                productCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 50);
                    } else {
                        card.style.display = 'none';
                        card.style.opacity = '0';
                    }
                });
            });
        });
    }

    // ========================================================
    // --- SHOPPING CART, INVOICE & TELEGRAM INTEGRATION ---
    // ========================================================

    // 1. Inject Modals HTML into Body
    const modalsHTML = `
    <div class="cart-modal-overlay" id="cartModal">
        <div class="cart-modal">
            <div class="cart-header">
                <h3>Shopping Cart</h3>
                <span class="close-cart" id="closeCartBtn"><i class="fa-solid fa-xmark"></i></span>
            </div>
            <div class="cart-body" id="cartItems">
                <!-- Items go here -->
            </div>
            <div class="cart-footer">
                <div class="cart-total">
                    <span>Total:</span>
                    <span id="cartTotal">$0.00</span>
                </div>
                <button class="btn btn-outline" id="viewInvBtn" style="color:#333; border-color:#ccc; width:100%; margin-bottom:15px;">View Invoice</button>
                
                <div class="cart-actions">
                    <button class="social-checkout-btn btn-telegram" id="checkoutTeleg">
                        <i class="fa-brands fa-telegram"></i> Order via Telegram
                    </button>
                    <div class="dual-btns">
                        <button class="social-checkout-btn btn-facebook" id="checkoutFb">
                            <i class="fa-brands fa-facebook"></i> Facebook
                        </button>
                        <button class="social-checkout-btn btn-phone" id="checkoutPhone">
                            <i class="fa-solid fa-phone"></i> Call
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="invoice-backdrop" id="invBackdrop"></div>
    <div class="invoice-modal" id="invoiceModal">
        <div class="invoice-header">
            <div class="inv-logo">LITTLEMAKER</div>
            <div class="inv-title">INVOICE</div>
        </div>
        <div class="invoice-body" id="invoiceContent">
            <!-- Invoice Table -->
        </div>
        <div class="invoice-actions">
            <button class="btn btn-outline" id="closeInvBtn" style="color:#333; border-color:#ccc;">Close</button>
            <button class="btn btn-primary" onclick="window.print()">Print</button>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalsHTML);

    // 2. State Management
    let cart = JSON.parse(localStorage.getItem('lm_cart_data')) || [];
    const cartCountEls = document.querySelectorAll('.cart-badge');
    const cartModal = document.getElementById('cartModal');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');
    const viewInvBtn = document.getElementById('viewInvBtn');
    const invoiceModal = document.getElementById('invoiceModal');
    const invBackdrop = document.getElementById('invBackdrop');
    
    // 3. Update UI Function
    const updateCartUI = () => {
        // Update Badges - count total items (sum of quantities)
        const count = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCountEls.forEach(el => el.textContent = count);
        
        // Update LocalStorage
        localStorage.setItem('lm_cart_data', JSON.stringify(cart));
    };

    // 4. Render Cart Items inside Modal
    const renderCart = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; margin-top: 20px; color:#666;">Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                const itemTotal = item.price * item.qty;
                total += itemTotal;
                const itemHTML = `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h5>${item.name}</h5>
                        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                    </div>
                    <div style="display:flex; align-items:center;">
                        <div class="qty-controls">
                            <button class="qty-btn minus" data-index="${index}">-</button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn plus" data-index="${index}">+</button>
                        </div>
                        <button class="remove-item" data-index="${index}">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>`;
                cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
            });
        }

        cartTotalEl.textContent = '$' + total.toFixed(2);

        // Add event listeners for cart controls
        document.querySelectorAll('.qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.closest('button').dataset.index;
                cart[index].qty++;
                updateCartUI();
                renderCart();
            });
        });

        document.querySelectorAll('.qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.closest('button').dataset.index;
                if (cart[index].qty > 1) {
                    cart[index].qty--;
                } else {
                    // If 1, ask to remove or just remove
                    cart.splice(index, 1);
                }
                updateCartUI();
                renderCart();
            });
        });

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.closest('button').dataset.index;
                cart.splice(index, 1);
                updateCartUI();
                renderCart();
            });
        });
    };

    // 5. Add to Cart Logic (Handle Quantities)
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const name = card.querySelector('h4').textContent;
            
            // Clean price string
            let priceEl = card.querySelector('.price');
            let clone = priceEl.cloneNode(true);
            let old = clone.querySelector('.old-price');
            if(old) old.remove();
            let priceText = clone.textContent.trim().replace('$', '');
            let price = parseFloat(priceText);

            // Check if item exists
            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.qty++;
            } else {
                const newItem = {
                    name: name,
                    price: price,
                    qty: 1
                };
                cart.push(newItem);
            }

            updateCartUI();
            
            // Animation
            cartCountEls.forEach(el => {
                el.classList.add('bump');
                setTimeout(() => el.classList.remove('bump'), 200);
            });
            
            showToast("Added to cart: " + name);
        });
    });

    // 7. Modal Open/Close Logic
    const cartTriggers = document.querySelectorAll('.cart-trigger');
    cartTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            renderCart();
            cartModal.classList.add('open');
        });
    });

    document.getElementById('closeCartBtn').addEventListener('click', () => {
        cartModal.classList.remove('open');
    });

    // Close if clicking outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('open');
        }
    });

    // 8. Invoice Logic
    const showInvoice = () => {
        if (cart.length === 0) return;
        
        let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th class="text-right">Qty</th>
                    <th class="text-right">Price</th>
                    <th class="text-right">Total</th>
                </tr>
            </thead>
            <tbody>`;
            
        let total = 0;
        cart.forEach(item => {
            let lineTotal = item.price * item.qty;
            total += lineTotal;
            tableHTML += `
            <tr>
                <td>${item.name}</td>
                <td class="text-right">${item.qty}</td>
                <td class="text-right">$${item.price.toFixed(2)}</td>
                <td class="text-right">$${lineTotal.toFixed(2)}</td>
            </tr>`;
        });

        tableHTML += `
            </tbody>
        </table>
        <div class="invoice-summary">
            <strong>Grand Total: $${total.toFixed(2)}</strong>
        </div>
        <p>Date: ${new Date().toLocaleDateString()}</p>`;

        document.getElementById('invoiceContent').innerHTML = tableHTML;
        invBackdrop.classList.add('open');
        invoiceModal.classList.add('open');
    };

    viewInvBtn.addEventListener('click', () => {
         if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        cartModal.classList.remove('open'); // Close cart
        showInvoice();
    });

    const closeInvoice = () => {
        invoiceModal.classList.remove('open');
        invBackdrop.classList.remove('open');
    };

    document.getElementById('closeInvBtn').addEventListener('click', closeInvoice);
    invBackdrop.addEventListener('click', closeInvoice);

    // 9. Checkout Actions Logic
    
    // Helper: Generate Order String
    const generateOrderMessage = () => {
        let message = "Hello LittleMaker, I would like to order:%0A%0A";
        let total = 0;
        cart.forEach((item, index) => {
            let itemTotal = item.price * item.qty;
            total += itemTotal;
            message += `${index + 1}. ${item.name} (x${item.qty}) - $${itemTotal.toFixed(2)}%0A`;
        });
        message += `%0A----------------%0ATotal: $${total.toFixed(2)}%0A%0APlease confirm my order.`;
        return message;
    };

    // Telegram Handler
    const checkoutTeleg = document.getElementById('checkoutTeleg');
    if(checkoutTeleg) {
        checkoutTeleg.addEventListener('click', () => {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            const telegramUser = "samnangkhiev"; // Target username
            const url = `https://t.me/${telegramUser}?text=${generateOrderMessage()}`;
            window.open(url, '_blank');
        });
    }

    // Facebook Handler
    const checkoutFb = document.getElementById('checkoutFb');
    if(checkoutFb) {
        checkoutFb.addEventListener('click', () => {
             window.open('https://t.me/samnangkhiev', '_blank');
        });
    }

    // Phone Handler
    const checkoutPhone = document.getElementById('checkoutPhone');
    if(checkoutPhone) {
        checkoutPhone.addEventListener('click', () => {
            window.location.href = 'tel:+855719716888';
        });
    }

    // Initial Load
    updateCartUI();

    // --- Toast Notification ---
    function showToast(message) {
        const toast = document.getElementById("toast");
        if (toast) {
            toast.textContent = message;
            toast.className = "toast show";
            setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
        }
    }
});