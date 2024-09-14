document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const sections = contentDiv.querySelectorAll('section[data-text]');

    sections.forEach(section => {
        const dataText = section.getAttribute('data-text');

        // Cria o título de abertura
        const openingTitle = document.createElement('h3');
        openingTitle.textContent = `<${dataText}>`;

        // Cria o título de fechamento
        const closingTitle = document.createElement('h3');
        closingTitle.textContent = `</${dataText}>`;

        // Insere os títulos no DOM
        section.insertBefore(openingTitle, section.firstChild);
        section.appendChild(closingTitle);
    });
});

// nao lembro onde vi esse codigo nao sei oq é DOM