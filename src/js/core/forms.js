import sender from "./sender.js";
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);

            if (formData.get('phone')) {
                formData.set('phone', formatPhone(formData.get('phone')));
            }

            const formDataObject = Object.fromEntries(formData.entries());

            form.classList.add('sending');

            window.currentSendingForm = {form, formDataObject};
            sender(formDataObject);
        });

        initAgree.bind(form)();
        initBtn.bind(form)();
        initInputPhone.bind(form)();
    });
});

function initInputPhone() {
    if (import.meta.env.DEV) {
        const input = this.querySelector('input[name="phone"]');

        function generatePhoneNumber() {
            let phoneNumber = '';
            for (let i = 0; i < 7; i++) {
                phoneNumber += Math.floor(Math.random() * 7);
            }
            return phoneNumber;
        }

        input.value = "999" + generatePhoneNumber();
    }
}

function initAgree() {
    const agreeCheckbox = this.querySelector('.agree input[type="checkbox"]');

    if (agreeCheckbox) {
        agreeCheckbox.addEventListener('change', (e) => {
            updateBtn.bind(this)(e.currentTarget.checked);
        });

        updateBtn.bind(this)(agreeCheckbox.checked)
    }
}

function animate(element) {
    let amplitude = 6;
    let duration = 200;

    if (!element) { return; }

    element.style.transitionDuration = '0.5s';

    function swing() {
        element.style.transform = `translateX(${amplitude}px)`;
        setTimeout(() => {
            element.style.transform = 'translateX(0px)';
            setTimeout(() => {
                element.style.transform = `translateX(${amplitude}px)`;
                setTimeout(() => {
                    element.style.transform = 'translateX(0px)';
                }, duration);
            }, duration);
        }, duration);
    }

    swing();
}

function initBtn() {
    const submitBtn = this.querySelector('button[type="submit"]');
    const agree = this.querySelector('.agree');

    submitBtn?.addEventListener('mouseenter', (e) => {
        submitBtn.classList.add('mouseenter');

        if (submitBtn.style.opacity !== '1' && agree) {
            animate(agree);
        }
    });

    submitBtn?.addEventListener('mouseleave', (e) => {
        submitBtn.classList.remove('mouseenter');
    });
}

function updateBtn(checkStatus) {
    const submitBtn = this.querySelector('button[type="submit"]');

    if (!submitBtn) { return; }

    if (!checkStatus) {
        submitBtn.style.opacity = '0.5';
        submitBtn.style.cursor = 'auto';
    } else {
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
    }
}