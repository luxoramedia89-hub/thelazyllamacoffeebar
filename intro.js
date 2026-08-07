document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('lazyLlamaIntroSeen')) {
        hideIntro();
        return;
    }

    const overlay = document.getElementById('intro-overlay');
    
    setTimeout(() => {
        document.querySelectorAll('.bean').forEach(bean => {
            bean.classList.add('visible');
        });
    }, 300);
    
    setTimeout(() => {
        document.querySelector('.coffee-cup').classList.add('rise');
    }, 800);
    
    setTimeout(() => {
        document.querySelector('.coffee-cup').classList.add('rotate');
    }, 1500);
    
    setTimeout(() => {
        document.querySelectorAll('.steam').forEach(steam => {
            steam.classList.add('rise');
        });
    }, 2000);
    
    setTimeout(() => {
        document.querySelector('.llama-intro').classList.add('appear');
    }, 2500);
    
    setTimeout(() => {
        document.querySelector('.intro-title').classList.add('visible');
    }, 2800);
    
    setTimeout(() => {
        document.querySelector('.intro-subtitle').classList.add('visible');
    }, 3200);
    
    setTimeout(() => {
        document.querySelector('.intro-tagline').classList.add('visible');
    }, 3600);
    
    setTimeout(() => {
        document.querySelector('.coffee-scene').classList.add('zoom');
        document.querySelector('.intro-text').classList.add('fade-out');
    }, 4200);
    
    setTimeout(() => {
        hideIntro();
        sessionStorage.setItem('lazyLlamaIntroSeen', 'true');
    }, 5000);
    
    overlay.addEventListener('click', () => {
        hideIntro();
        sessionStorage.setItem('lazyLlamaIntroSeen', 'true');
    });
    
    function hideIntro() {
        overlay.classList.add('fade-out');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 800);
    }
});