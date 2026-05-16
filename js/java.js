document.addEventListener('DOMContentLoaded', () => {
    
    
    console.log('👋 Bienvenido a Jujutsu Kaisen');
    
    
    const cards = document.querySelectorAll('.pillars__card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const nombre = card.querySelector('.pillars__title').textContent;
            alert(`✨ Has seleccionado a: ${nombre}`);
        });
    });
    
    
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.style.backgroundColor = window.scrollY > 50 ? '#000' : '#111';
    });
    
    
    const footer = document.querySelector('.footer');
    footer.addEventListener('mouseenter', () => footer.style.backgroundColor = '#222');
    footer.addEventListener('mouseleave', () => footer.style.backgroundColor = '#111');
    
});