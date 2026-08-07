document.addEventListener('DOMContentLoaded', function() {
    console.log('🦙 The Lazy Llama Coffee Bar loaded!');
    updateCartCount();
    updateWishlistCount();
    checkAuthStatus();
});

function updateCartCount() {
    let cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
}

function updateWishlistCount() {
    let wishlist = getWishlist();
    document.querySelectorAll('.wishlist-count').forEach(el => {
        el.textContent = wishlist.length;
    });
}

function getCart() {
    try {
        return JSON.parse(localStorage.getItem('lazyLlamaCart')) || [];
    } catch {
        return [];
    }
}

function getWishlist() {
    try {
        return JSON.parse(localStorage.getItem('lazyLlamaWishlist')) || [];
    } catch {
        return [];
    }
}

async function checkAuthStatus() {
    try {
        const response = await fetch('/api/auth/me', {
            credentials: 'include'
        });
        const data = await response.json();
        if (data.success) {
            console.log('User logged in:', data.data);
        }
    } catch (error) {
        console.log('Not logged in');
    }
}

function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}