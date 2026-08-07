document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    document.getElementById('applyFilters')?.addEventListener('click', function() {
        filterProducts();
    });
    
    document.getElementById('clearFilters')?.addEventListener('click', function() {
        document.querySelectorAll('.filter-options input').forEach(input => {
            if (input.value === 'all') {
                input.checked = true;
            } else {
                input.checked = false;
            }
        });
        document.getElementById('priceRange').value = 50;
        document.getElementById('priceDisplay').textContent = '$50';
        filterProducts();
    });
    
    document.getElementById('sortSelect')?.addEventListener('change', function() {
        filterProducts();
    });
    
    // Wishlist buttons
    document.querySelectorAll('.product-wishlist').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            const productId = this.dataset.id || '1';
            toggleWishlist(productId);
        });
    });
    
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.dataset.id || '1';
            addToCart(productId);
        });
    });
});

function filterProducts() {
    // In a real implementation, this would fetch filtered products from the API
    showNotification('Filters applied');
}

function toggleWishlist(productId) {
    let wishlist = getWishlist();
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist');
    }
    localStorage.setItem('lazyLlamaWishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

function addToCart(productId) {
    let cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    localStorage.setItem('lazyLlamaCart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Added to cart!');
}