const formIdentify = document.getElementById('identify')
const formName = document.getElementById('name')
const formEmail = document.getElementById('email')

formName.addEventListener('focusout', (e) => { checkInputs() }, true)
//formIdentify.addEventListener('focusin', (e) => { clearInputs() }, true)
//formIdentify.addEventListener('focus', (e) => { clearInputs() }, true)
formIdentify.addEventListener('submit', (e) => { 
    //e.preventDefault()
    clearInputs()
 }, true)

function checkInputs(input, message) {
    const name = formName.value.trim()
    const email = formEmail.value.trim()

    if(name === '') {
        errorValidation(formName, "Preencha esse campo")
    } else {
        sucessValidation(formName)
    }
    // if(email === '') {
    //     errorValidation(formEmail, "Preencha esse campo")
    // } else {
    //     sucessValidation(formEmail)
    // }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formName.className = 'input_error'
   // formEmail.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessValidation(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formName.className = 'input_sucess'
    // formEmail.className = 'input_sucess'
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