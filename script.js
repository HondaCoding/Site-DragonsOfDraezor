// ------------- BOTOES HOME-VIDEO ---------------
function redirectToURL(url) {
    window.open(url='https://discord.gg/mUxBxHUzyq', '_blank');
}


// ------------- BOTOES DO NAV ---------------
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave para a seção
    }
}


// ----------------- MODAL --------------------
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close-btn');
    const openBtns = document.querySelectorAll('.open-modal-btn');
    const body = document.body;

    // Abre o modal
    openBtns.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
            body.classList.add('no-scroll');
        });
    });

    // Fecha a modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        body.classList.remove('no-scroll');
    });

    // Fecha a modal quando clica fora
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            body.classList.remove('no-scroll');
        }
    });
});


// -------------------- ICON BACK TOPO --------------------
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    function toggleButtonVisibility() {
        if (window.scrollY > 600) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    // Evento de rolagem para mostrar ou esconder
    window.addEventListener('scroll', toggleButtonVisibility);

    // Volta para o topo de forma suave
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
