export const getLastDayMonth = () => {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const lastDayOfMonth = new Date(nextMonth - 1);
    const lastDay = lastDayOfMonth.getDate();
    const monthNamesDeclension = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const monthNames = [
        "январь", "февраль", "март", "апрель", "май", "июнь",
        "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
    ];

    const monthDeclensionName = monthNamesDeclension[lastDayOfMonth.getMonth()];
    const monthName = monthNames[lastDayOfMonth.getMonth()];

    return {
        lastDay,
        monthName,
        monthDeclensionName,
        today: today.getDate()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const needChangeElements = document.querySelectorAll('[data-last-day]');
    const lastDayObj = getLastDayMonth();

    needChangeElements.forEach(el => {
        el.innerText = `${lastDayObj.lastDay} ${lastDayObj.monthDeclensionName}`;
    });
});