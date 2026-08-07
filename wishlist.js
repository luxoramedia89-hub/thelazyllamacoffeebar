document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-wishlist').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            const productId = this.dataset.id || '1';
            toggleWishlist(productId);
        });
    });
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.dataset.id || '1';
            addToCart(productId);
        });
    });
});