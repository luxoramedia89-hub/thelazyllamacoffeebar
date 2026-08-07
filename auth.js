document.addEventListener('DOMContentLoaded', function() {
    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                    credentials: 'include'
                });
                
                const data = await response.json();
                if (data.success) {
                    window.location.href = 'account.html';
                } else {
                    showMessage('loginMessage', data.message, 'error');
                }
            } catch (error) {
                showMessage('loginMessage', 'Login failed. Please try again.', 'error');
            }
        });
    }
    
    // Register
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const phone = document.getElementById('registerPhone').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            if (password !== confirmPassword) {
                showMessage('registerMessage', 'Passwords do not match', 'error');
                return;
            }
            
            try {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, phone, password }),
                    credentials: 'include'
                });
                
                const data = await response.json();
                if (data.success) {
                    window.location.href = 'account.html';
                } else {
                    showMessage('registerMessage', data.message, 'error');
                }
            } catch (error) {
                showMessage('registerMessage', 'Registration failed. Please try again.', 'error');
            }
        });
    }
    
    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            try {
                await fetch('/api/auth/logout', {
                    method: 'POST',
                    credentials: 'include'
                });
                window.location.href = 'index.html';
            } catch (error) {
                console.error('Logout failed', error);
            }
        });
    }
});

function showMessage(elementId, message, type) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = message;
        el.className = type;
        el.style.display = 'block';
        setTimeout(() => {
            el.style.display = 'none';
        }, 5000);
    }
}