let currentStep = 1;
const totalSteps = 4;

function nextStep(step) {
    currentStep = step;
    updateSteps();
}

function prevStep(step) {
    currentStep = step;
    updateSteps();
}

function updateSteps() {
    for (let i = 1; i <= totalSteps; i++) {
        const el = document.getElementById(`step${i}`);
        if (el) {
            el.style.display = i === currentStep ? 'block' : 'none';
        }
    }
    document.querySelectorAll('.checkout-steps .step').forEach((el, index) => {
        el.classList.toggle('active', index + 1 === currentStep);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Payment method toggle
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('cardDetails').style.display = 
                this.value === 'card' ? 'block' : 'none';
        });
    });
    
    // Place order
    document.getElementById('placeOrderBtn')?.addEventListener('click', function() {
        showNotification('Order placed successfully! 🎉');
        setTimeout(() => {
            window.location.href = 'account.html';
        }, 2000);
    });
});

// Make functions globally available
window.nextStep = nextStep;
window.prevStep = prevStep;