document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            phone: document.getElementById('contactPhone').value,
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value
        };
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            const msgEl = document.getElementById('contactMessageResponse');
            
            if (data.success) {
                msgEl.textContent = 'Thank you! Your message has been sent.';
                msgEl.className = 'success';
                this.reset();
            } else {
                msgEl.textContent = data.message || 'Something went wrong. Please try again.';
                msgEl.className = 'error';
            }
        } catch (error) {
            document.getElementById('contactMessageResponse').textContent = 
                'Failed to send message. Please try again.';
            document.getElementById('contactMessageResponse').className = 'error';
        }
    });
});