window.onload = () => {
    let hamburgerButton = document.getElementById('hamburger')
    let mobileMenu = document.getElementById('mobile-menu')
    let userPics = document.getElementsByClassName('user-pic')
    let userTexts = document.getElementsByClassName('user-text')
    let mLink = document.querySelectorAll('#mLink')

    hamburgerButton.addEventListener('click', toggleHamburgerButton)

    function toggleHamburgerButton() {
        hamburgerButton.classList.toggle('open')
        mobileMenu.classList.toggle('hidden')

    }

    //Menu click hide button
    mLink.forEach(lnk => {
        lnk.addEventListener('click', toggleHamburgerButton)
    });

    // User review
    return showReview = function (e) {

        for (userPic of userPics) {
            userPic.classList.remove('border-active');
        }

        for (userText of userTexts) {
            userText.classList.remove('active-review');
        }

        let index = Array.from(userPics).indexOf(event.target)
        userPics[index].classList.add('border-active');
        userTexts[index].classList.add('active-review');
    }

}