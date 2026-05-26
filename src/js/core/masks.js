import IMask from 'imask';

export const maskOptions = {
    mask: '+{7} (000) 000-00-00',
    prepare: (str, masked) => {
        const ch = String(str);
        if (!masked.value && ch === "8") return "7";
        return ch;
    }
};

const setMask = (element, options = maskOptions) => {
    IMask(element, options);
}

export const getMaskByElement = (element) => {
    if (!window.imasks) { return null; }

    for (const mask of window.imasks) {
        if (mask.maskEl === element) {
            return mask.mask;
        }
    }

    setMask(element);

    return null;
}
window.getMaskByElement = getMaskByElement;

document.addEventListener('DOMContentLoaded', (e) => {
    const phoneElements = document.querySelectorAll('[data-mask-phone]');

    window.imasks = [];
    phoneElements.forEach(maskEl => {
        const mask = IMask(maskEl, maskOptions);
        window.imasks.push({ maskEl, mask });
    });
});