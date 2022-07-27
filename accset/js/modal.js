const modalBtns = document.querySelectorAll('.js-btn-modal')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')



for(const modalBtn of modalBtns){
    modalBtn.addEventListener('click', showModal)
}

function showModal(){
    modal.classList.add('open')
}

function hideModal(){
    modal.classList.remove('open')
}

modalClose.addEventListener('click', hideModal)