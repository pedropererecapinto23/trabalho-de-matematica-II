// O código JavaScript permanece o mesmo do passo anterior e está pronto para 8 itens!

document.addEventListener('DOMContentLoaded', () => {
    const infoBtn = document.getElementById('infoBtn');
    const curiosidades = document.querySelectorAll('.curiosidade-item');
    const totalCuriosidades = curiosidades.length;
    let currentIndex = 0; 
    const transitionDuration = 800; // Deve corresponder à transição do CSS (0.8s)

    function showNextCuriosity() {
        const currentActive = document.querySelector('.curiosidade-item.active');
        
        if (currentActive) {
            currentActive.classList.remove('active');
            
            setTimeout(() => {
                
                currentIndex = (currentIndex % totalCuriosidades);
                
                const nextCuriosity = curiosidades[currentIndex];
                nextCuriosity.style.transform = 'translateX(100%)'; 
                
                void nextCuriosity.offsetWidth; 
                
                nextCuriosity.classList.add('active');

                currentIndex++;

            }, transitionDuration);
        } else {
            curiosidades[0].classList.add('active');
            currentIndex = 1;
        }
    }

    curiosidades.forEach((item, index) => {
        if (index !== 0) {
            item.style.opacity = 0;
            item.style.transform = 'translateX(100%)'; 
        }
    });

    infoBtn.addEventListener('click', showNextCuriosity);
});