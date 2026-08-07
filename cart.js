document.addEventListener('DOMContentLoaded', function() {
    // Clear cart
    document.getElementById('clearCartBtn')?.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear your cart?')) {
            clearCart();
        }
    });
});

function clearCart() {
    localStorage.setItem('lazyLlamaCart', JSON.stringify([]));
    updateCartCount();
    showNotification('Cart cleared');
    location.reload();
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('lazyLlamaCart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Item removed from cart');
    location.reload();
}

function updateCartQuantity(productId, quantity) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        } else {
            item.quantity = quantity;
        }
    }
    localStorage.setItem('lazyLlamaCart', JSON.stringify(cart));
    updateCartCount();
    location.reload();
}

// Make functions globally available for onclick
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.clearCart = clearCart;