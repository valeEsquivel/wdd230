// * MATCH PASSWORD

const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const errorMessage = document.querySelector('#error-message');

pass2.addEventListener('focusout', () => {
    if (pass1.value !== pass2.value) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Passwords do not match';
    } else {
        errorMessage.style.display = 'none';
    }
});

// * RANGE DISPLAY
const rate = document.querySelector('#rate');
const rangevalue = document.querySelector('#rangevalue');

rate.addEventListener('change', () => {
    rangevalue.textContent = rate.value;
});