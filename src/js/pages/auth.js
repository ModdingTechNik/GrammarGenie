const login = document.querySelector('#form-login')
const password = document.querySelector('#form-password')
const policy = document.querySelector('#form-policy-approve')


document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()

    let hasError = false

    hasError = hasError | validateTextbox(login)
    hasError = hasError | validateTextbox(password)

    if (policy != null && !policy.checked) {
        hasError = true;
    }

    if (!hasError) window.open('./testing.html', '_self')
})

function validateTextbox(textbox) {
    let hasError = false;
    if (textbox.value.length === 0) {
        hasError = true
        textbox.classList.add('accent-error-border')
    } else {
        textbox.classList.remove('accent-error-border')
    }
    return hasError
}