document.addEventListener('DOMContentLoaded', function() {
    // 3D Product rotation on mouse move
    const viewer = document.getElementById('product3DViewer');
    if (viewer) {
        viewer.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateY = (x - 0.5) * 30;
            const rotateX = (y - 0.5) * -20;
            document.querySelector('.product-3d-container').style.transform = 
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        viewer.addEventListener('mouseleave', function() {
            document.querySelector('.product-3d-container').style.transform = 
                'rotateX(0deg) rotateY(0deg)';
        });
    }
    
    // Quantity buttons
    const qtyInput = document.getElementById('productQuantity');
    document.getElementById('qtyDecrease')?.addEventListener('click', function() {
        let val = parseInt(qtyInput.value);
        if (val > 1) qtyInput.value = val - 1;
    });
    document.getElementById('qtyIncrease')?.addEventListener('click', function() {
        let val = parseInt(qtyInput.value);
        if (val < 99) qtyInput.value = val + 1;
    });
    
    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.option-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Add to cart
    document.getElementById('addToCartBtn')?.addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('productQuantity').value);
        addToCart('1', quantity);
    });
    
    // Wishlist
    document.getElementById('wishlistToggle')?.addEventListener('click', function() {
        this.classList.toggle('active');
        toggleWishlist('1');
    });
    
    // Star rating
    document.querySelectorAll('.star-rating span').forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.value);
            this.parentElement.querySelectorAll('span').forEach(s => {
                s.classList.toggle('active', parseInt(s.dataset.value) <= rating);
            });
        });
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.dataset.value);
            this.parentElement.querySelectorAll('span').forEach(s => {
                s.classList.toggle('active', parseInt(s.dataset.value) <= rating);
            });
        });
        star.addEventListener('mouseleave', function() {
            const active = this.parentElement.querySelectorAll('span.active');
            // Reset to current selection
        });
    });
});