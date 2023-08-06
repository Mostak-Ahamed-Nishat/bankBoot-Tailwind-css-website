window.onload = () => {
    let hamburgerButton = document.getElementById('hamburger')
    let mobileMenu = document.getElementById('mobile-menu')
    let userPics = document.getElementsByClassName('user-pic')
    let userTexts = document.getElementsByClassName('user-text')
    let mLink = document.querySelectorAll('#mLink')
    let toggleButton = document.getElementById('toggleButton')

    hamburgerButton.addEventListener('click', toggleHamburgerButton)

    function toggleHamburgerButton() {
        hamburgerButton.classList.toggle('open')
        mobileMenu.classList.toggle('hidden')

    }

    //Menu click hide button
    mLink.forEach(lnk => {
        lnk.addEventListener('click', toggleHamburgerButton)
    });

   //Pricing toggle 

   const card_1_font = document.querySelector('#card-1-front')
   const card_1_back = document.querySelector('#card-1-back')

   const card_2_font = document.querySelector('#card-2-front')
   const card_2_back = document.querySelector('#card-2-back')

   const card_3_font = document.querySelector('#card-3-front')
   const card_3_back = document.querySelector('#card-3-back')

   toggleButton.addEventListener('change', () => {
       card_1_font.classList.toggle('-rotate-y-180')
       card_1_back.classList.toggle('rotate-y-180')

       card_2_font.classList.toggle('-rotate-y-180')
       card_2_back.classList.toggle('rotate-y-180')

       card_3_font.classList.toggle('-rotate-y-180')
       card_3_back.classList.toggle('rotate-y-180')
   })
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