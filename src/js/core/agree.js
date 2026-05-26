document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.agree').forEach(agree => {

        agree.addEventListener('click', (e) => {
            const input = e.currentTarget.querySelector('input[type="checkbox"]');
            input.checked = !input.checked;
            input.dispatchEvent(new Event('change'));

            if (input.checked) {
                e.currentTarget.classList.add('active');
            } else {
                e.currentTarget.classList.remove('active');
            }
        });

    });

});