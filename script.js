window.onload = () => {
    let hamburgerButton = document.getElementById('hamburger')
    let mobileMenu = document.getElementById('mobile-menu')
    let menu = document.getElementById('menu')
    let mLink = document.getElementById('mLink')

    hamburgerButton.addEventListener('click', toggleHamburgerButton)

    function toggleHamburgerButton() {
        hamburgerButton.classList.toggle('open')
        mobileMenu.classList.toggle('hidden')

    }

    mLink.forEach(link => {
        mLink.addEventListener('click', toggleHamburgerButton)
    });

}