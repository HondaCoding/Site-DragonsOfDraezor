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

    // Abre o modal quando qualquer botão é clicado
    openBtns.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
            body.classList.add('no-scroll'); // Adiciona a classe para desativar a rolagem
        });
    });

    // Fecha a modal quando o botão "X" é clicado
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        body.classList.remove('no-scroll');
    });

    // Fecha a modal quando se clica fora da área de conteúdo da modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            body.classList.remove('no-scroll');
        }
    });
});

