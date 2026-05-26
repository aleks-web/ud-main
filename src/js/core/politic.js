// Подставляем нужный файл политики конфиденциальности
document.querySelectorAll('[data-politic-link]').forEach((link) => {
    const region = import.meta.env.VITE_REGION;

    if (link.tagName == 'A' && region) {
        link.href = `/politic-${region}.pdf`;
        link.setAttribute('target', '_blank');
    }
});