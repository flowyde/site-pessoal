const themeToggleCheckbox = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Define o tema inicial com base na preferência da pessoa
if (currentTheme === 'dark') {
document.documentElement.setAttribute('data-theme', 'dark');
themeToggleCheckbox.checked = true;
}

// Função para alternar o tema
function toggleTheme() {
if (themeToggleCheckbox.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}
}

// Adiciona o evento pro checkbox
themeToggleCheckbox.addEventListener('change', toggleTheme);

