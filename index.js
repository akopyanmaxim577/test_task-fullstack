(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

async function getCountryCode() {
    const response = await fetch('https://ipinfo.io/json?token=930118637499dc');
    const data = await response.json();
    return data.country;
}

async function updateCountryCode() {
    const countryCode = await getCountryCode();
    const countryDropdown = document.getElementById('country-code-dropdown');
    switch (countryCode) {
        case 'US':
            countryDropdown.innerText = `+1 (US)`;
            break;
        case 'GB':
            countryDropdown.innerText = '+44 (UK)';
            break;
        case 'IN':
            countryDropdown.innerText = '+91 (India)';
            break;
        case 'UA':
            countryDropdown.innerText = '+380 (Ukraine)';
            break;
        default:
            countryDropdown.innerText = `+${countryCode}`;
            break;
    }
}

updateCountryCode();

const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
        const countryCode = this.dataset.countryCode;
        const countryDropdown = document.getElementById('country-code-dropdown');
        countryDropdown.innerText = this.innerText;
        const phoneInput = document.getElementById('phone');
        phoneInput.value = '';
        phoneInput.placeholder = `Enter phone number (${countryCode} format)`;
        phoneInput.setAttribute('pattern', `\\+${countryCode}\\d{10,15}`);
        phoneInput.focus();
    });
});