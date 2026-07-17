
document.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.querySelector('.menu-trigger');
    const appNavigation = document.querySelector('.app-navigation');

    if (menuTrigger && appNavigation) {
        menuTrigger.addEventListener('click', () => {
            // Check current presentation state visibility via explicit layout parameters
            const isOpened = menuTrigger.getAttribute('aria-expanded') === 'true';
            
            // Toggle logical states correctly without framework injection models
            menuTrigger.setAttribute('aria-expanded', !isOpened);
            appNavigation.classList.toggle('is-active');
        });

        // Event cleanup parameter when user expands screen spaces dynamically
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                menuTrigger.setAttribute('aria-expanded', 'false');
                appNavigation.classList.remove('is-active');
            }
        });
    }
});