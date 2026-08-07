document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    document.querySelectorAll('.account-nav a').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.account-nav a').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const tabName = this.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = content.id === tabName ? 'block' : 'none';
            });
        });
    });
    
    // Settings form
    document.getElementById('settingsForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Profile updated successfully!');
    });
});