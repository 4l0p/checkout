const formIdentify = document.getElementById('identify')
const formName = document.getElementById('name')
const formEmail = document.getElementById('email')
const formCPF = document.getElementById('cpf')
const formTEL = document.getElementById('tel')
const formCEP = document.getElementById('cep')
const formAddress = document.getElementById('address')
const formNumber = document.getElementById('number')
const formDistrict = document.getElementById('district')
const formNameSaved = document.getElementById('name-saved')
const formCardNumber = document.getElementById('card-number')
const formCardValid = document.getElementById('card-valid')
const formCardCode = document.getElementById('card-code')
const formCardOwner = document.getElementById('card-owner')
const formCardCPF = document.getElementById('card-cpf')
const formCardInstallments = document.getElementById('installments')

formName.addEventListener('focusout', (e) => { checkName() }, true)
formEmail.addEventListener('focusout', (e) => { checkEmail() }, true)
formCPF.addEventListener('focusout', (e) => { checkCPF() }, true)
formTEL.addEventListener('focusout', (e) => { checkTEL() }, true)
formCEP.addEventListener('focusout', (e) => { checkCEP() }, true)
formAddress.addEventListener('focusout', (e) => { checkAddress() }, true)
formNumber.addEventListener('focusout', (e) => { checkNumber() }, true)
formDistrict.addEventListener('focusout', (e) => { checkDistrict() }, true)
formNameSaved.addEventListener('focusout', (e) => { checkNameSaved() }, true)
formCardNumber.addEventListener('focusout', (e) => { checkCardNumber() }, true)
formCardValid.addEventListener('focusout', (e) => { checkCardValid() }, true)
formCardCode.addEventListener('focusout', (e) => { checkCardCode() }, true)
formCardOwner.addEventListener('focusout', (e) => { checkCardOwner() }, true)
formCardCPF.addEventListener('focusout', (e) => { checkCardCPF() }, true)
formCardInstallments.addEventListener('click', (e) => { checkInstallments() }, true)

formIdentify.addEventListener('submit', (e) => { 
    e.preventDefault()
 }, true)

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

function checkCPF() {
    const cpf = formCPF.value.trim()
    if(cpf === '') {
        errorCPF(formCPF, "Preencha esse campo")
    } else {
        sucessCPF(formCPF)
    }
}

function checkTEL() {
    const tel = formTEL.value.trim()
    if(tel === '') {
        errorTEL(formTEL, "Preencha esse campo")
    } else {
        sucessTEL(formTEL)
    }
}

function checkCEP() {
    const cep = formCEP.value.trim()
    if( cep === '') {
        errorCEP(formCEP, "Preencha esse campo")
    } else {
        sucessCEP(formCEP)
    }
}

function checkAddress() {
    const address = formAddress.value.trim()
    if( address === '') {
        errorAddress(formAddress, "Preencha esse campo")
    } else {
        sucessAddress(formAddress)
    }
}

function checkNumber() {
    const number = formNumber.value.trim()
    if( number === '') {
        errorNumber(formNumber, "Preencha esse campo")
    } else {
        sucessNumber(formNumber)
    }
}

function checkDistrict() {
    const district = formDistrict.value.trim()
    if( district === '') {
        errorDistrict(formDistrict, "Preencha esse campo")
    } else {
        sucessDistrict(formDistrict)
    }
}

function checkNameSaved() {
    const nameSaved = formNameSaved.value.trim()
    if( nameSaved === '') {
        errorNameSaved(formNameSaved, "Preencha esse campo")
    } else {
        sucessNameSaved(formNameSaved)
    }
}

function checkCardNumber() {
    const cardNumber = formCardNumber.value.trim()
    if( cardNumber === '') {
        errorCardNumber(formCardNumber, "Preencha esse campo")
    } else {
        sucessCardNumber(formCardNumber)
    }
}

function checkCardValid() {
    const cardValid = formCardValid.value.trim()
    if( cardValid === '') {
        errorCardValid(formCardValid, "Preencha esse campo")
    } else {
        sucessCardValid(formCardValid)
    }
}

function checkCardCode() {
    const cardCode = formCardCode.value.trim()
    if( cardCode === '') {
        errorCardCode(formCardCode, "Preencha esse campo")
    } else {
        sucessCardCode(formCardCode)
    }
}

function checkCardOwner() {
    const cardOwner = formCardOwner.value.trim()
    if( cardOwner === '') {
        errorCardOwner(formCardOwner, "Preencha esse campo")
    } else {
        sucessCardOwner(formCardOwner)
    }
}

function checkCardCPF() {
    const cardCPF = formCardCPF.value.trim()
    if( cardCPF === '') {
        errorCardCPF(formCardCPF, "Preencha esse campo")
    } else {
        sucessCardCPF(formCardCPF)
    }
}

function checkInstallments() {
    const cardInstallments = formCardInstallments.value.trim()
    if( cardInstallments === '') {
        errorCardInstallments(formCardInstallments, "Preencha esse campo")
    } else {
        sucessCardInstallments(formCardInstallments)
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

function errorCPF(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formCPF.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessCPF(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formCPF.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorTEL(input, message) {
    const formControl = input.parentElement.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formTEL.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessTEL(input) {
    const formControl = input.parentElement.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formTEL.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorCEP(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formCEP.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessCEP(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formCEP.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorAddress(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formAddress.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessAddress(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formAddress.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorNumber(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formNumber.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessNumber(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formNumber.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorDistrict(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formDistrict.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessDistrict(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formDistrict.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorNameSaved(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formNameSaved.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessNameSaved(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formNameSaved.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorCardNumber(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formCardNumber.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessCardNumber(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formCardNumber.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorCardValid(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formCardValid.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessCardValid(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formCardValid.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorCardCode(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formCardCode.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessCardCode(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formCardCode.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorCardOwner(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formCardOwner.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessCardOwner(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formCardOwner.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorCardCPF(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formCardCPF.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessCardCPF(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formCardCPF.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function errorCardInstallments(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = message
    formCardInstallments.className = 'input_error'
    icon_error.style.visibility = 'visible'
}

function sucessCardInstallments(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    small.innerText = ''
    formCardInstallments.className = 'input_sucess'
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'visible'
}

function clearInputs(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    const icon_sucess = formControl.querySelector('.img-sucess')
    const icon_error = formControl.querySelector('.img-error')
    form.className = '';
    small.innerText = ''
    icon_error.style.visibility = 'hidden'
    icon_sucess.style.visibility = 'hidden'

}