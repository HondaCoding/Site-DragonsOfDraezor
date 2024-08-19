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