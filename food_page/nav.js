const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        //Burger animation
        burger.classList.toggle('toggle')

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation)
                link.style.animation = ''
            else
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0}s`
        })
    })




}

navSlide()