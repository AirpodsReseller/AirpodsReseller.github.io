
const header = document.querySelector('.header');

// Ajouter un événement sur le défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { // Si le scroll dépasse 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
