const formIdentify = document.getElementById('identify')
const formName = document.getElementById('name')
const formEmail = document.getElementById('email')
const formCPF = document.getElementById('cpf')

formName.addEventListener('focusout', (e) => { checkName() }, true)
formEmail.addEventListener('focusout', (e) => { checkEmail() }, true)
formCPF.addEventListener('focusout', (e) => { checkInputs() }, true)

// formIdentify.addEventListener('submit', (e) => { 
//     //e.preventDefault()
//     clearInputs()
//  }, true)

function checkName() {
    const name = formName.value.trim()
    if(name === '') {
        errorName(formName, "Preencha esse campo")
    } else {
        sucessName(formName)
    }
}

function checkEmail() {
    const email = formEmail.value.trim()
    if(email === '') {
        errorEmail(formEmail, "Preencha esse campo")
    } else {
        sucessEmail(formEmail)
    }
}

function errorName(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formName.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessName(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formName.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorEmail(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formEmail.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessEmail(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formEmail.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function clearInputs(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    formName.className = '';
    small.innerText = ''
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'hidden'

}