const mobileButton = document.getElementById('mobile-button')
const navList = document.getElementById('nav-list')
const buttonsForModal = document.querySelectorAll('[data-open-modal]')
const modalWindow = document.getElementById('modal-window')
const closeModal = document.getElementById('close-modal')
const formItem = document.getElementById('form-block')
const loader = document.getElementById('loader')
const emailSend = document.getElementById('email-send')
const emailError = document.getElementById('email-error')


buttonsForModal.forEach((item) => {
    item.addEventListener(('click'), () => {
        modalWindow.classList.add('active')
        formItem.classList.add('active')
    })
})

// 13d547de-50d2-4724-b058-d1f8c84d1295

modalWindow.addEventListener('click', (e) => {

    if (e.target.closest('.modal-window__wrapper') === null) {
        modalWindow.classList.remove('active')
        formItem.classList.remove('active')
        loader.classList.remove('active')
        emailSend.classList.remove('active')
        emailError.classList.remove('active')
    }
})

closeModal.addEventListener('click', () => {
    modalWindow.classList.remove('active')
    formItem.classList.remove('active')
    loader.classList.remove('active')
    emailSend.classList.remove('active')
    emailError.classList.remove('active')
})

mobileButton.addEventListener('click', () => {
    mobileButton.classList.toggle('active')
    navList.classList.toggle('active')
})


formItem.addEventListener('submit', (e) => {
    e.preventDefault()
    let currentMessage = `${formItem.message.value} \n
    Send by: ${formItem.email.value}`
    formItem.classList.remove('active')
    loader.classList.add('active')


    Email.send({
        SecureToken : "da88ac74-ae33-417f-9b7d-6fb172467280",
        To : 'kostya.moroz.96@gmail.com',
        From : 'fox.dolor.99@gmail.com',
        Subject :  formItem.subject.value,
        Body :  currentMessage

    }).then(
        message => {
            console.log(message)
            formItem.email.value = ''
            formItem.message.value = ''
            loader.classList.remove('active')
            if (message === 'OK') {
                emailSend.classList.add('active')
            } else emailError.classList.add('active')

        }
    );
})

