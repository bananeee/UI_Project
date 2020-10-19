const modalAppear = () => {
    const main = document.querySelector('main')
    const cards = document.querySelectorAll('.card')
    const outerModal = document.querySelector('.modal')
    const innerModal = document.querySelector('.modal-inner')
    const closeButton = document.querySelector('.close')


    cards.forEach(card => {
        card.addEventListener('click', () => {
            var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
            document.body.style.margin = '0px ' + scrollBarWidth + 'px 0px 0px';

            outerModal.style.display = 'block'
            document.body.style.overflow = 'hidden'
            innerModal.classList.add('modal-active')
        })
    })

    closeButton.addEventListener('click', () => {
        document.body.style.margin = '';

        document.body.style.overflow = ''
        outerModal.style.display = 'none'
        innerModal.classList.remove('modal-active')
    })
}

modalAppear()
