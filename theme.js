const themes = {
    light: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/flatly/bootstrap.min.css',
    dark: 'https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/darkly/bootstrap.min.css'
};

const themeLink = document.getElementById('bootstrapTheme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedPreference = localStorage.getItem('siteTheme');
const preference = savedPreference === 'flatly' ? 'light' : savedPreference === 'darkly' ? 'dark' : savedPreference || 'dark';

function getEffectiveTheme(selectedPreference) {
    if (selectedPreference === 'auto') {
        return systemTheme.matches ? 'dark' : 'light';
    }

    return selectedPreference;
}

function applyTheme(selectedPreference) {
    const validPreference = ['light', 'dark', 'auto'].includes(selectedPreference) ? selectedPreference : 'dark';
    const effectiveTheme = getEffectiveTheme(validPreference);
    themeLink.href = themes[effectiveTheme];
    themeLink.dataset.preference = validPreference;
    themeLink.dataset.theme = effectiveTheme;

    document.querySelectorAll('.theme-option').forEach((option) => {
        const isSelected = option.dataset.themePreference === validPreference;
        option.classList.toggle('active', isSelected);
        option.setAttribute('aria-checked', isSelected);
    });
}

applyTheme(preference);

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(themeLink.dataset.preference);

    document.querySelectorAll('.theme-option').forEach((option) => {
        option.addEventListener('click', () => {
            const selectedPreference = option.dataset.themePreference;
            localStorage.setItem('siteTheme', selectedPreference);
            applyTheme(selectedPreference);
        });
    });

    systemTheme.addEventListener('change', () => {
        if (themeLink.dataset.preference === 'auto') {
            applyTheme('auto');
        }
    });
});
