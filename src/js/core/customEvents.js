document.addEventListener('fetchLeadSuccess', async (e) => {
    document.querySelector('.loading')?.remove();
    document.querySelectorAll('.sending').forEach((el) => {
        el.classList.remove('sending');
    });

    if (window.currentSendingForm) {
        window.currentSendingForm.form.classList.add('success');
        window.currentSendingForm.form.classList.remove('error');
        window.currentSendingForm = null;
    }
});

document.addEventListener('fetchLeadError', async (e) => {
    setTimeout(() => document.querySelector('.sending')?.classList.remove('sending'), 500);

    if (window.currentSendingForm) {
        window.currentSendingForm.form.classList.add('error');
        window.currentSendingForm.form.classList.remove('success');
        window.currentSendingForm = null;
    }
});