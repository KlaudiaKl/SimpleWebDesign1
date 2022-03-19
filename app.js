const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')
    //queryselector returns the first element that matches a specified css selector

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

//show active manu scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    console.log(scrollPos);

    //adds 'highlight' class to meny items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        aboutMenu.classList.remove('highlight')
        servicesMenu.classList.add('highlight')
        return
    }

    if (elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

//close mobile menu when item clicked

const hideMobileMenu = () => {
    //const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('.is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

const chooseDocButton = document.querySelector('#document');
const fileChosen = document.getElementById('file-chosen');
const wordCntVal = document.getElementById('word_cnt')

const chooseDocument = () => {
    fileChosen.textContent = this.files[0].name
}

chooseDocButton.addEventListener('change', function() {
    fileChosen.textContent = this.files[0].name


})

wordCntVal = fileChosen.getPageNumWords().toString;

//hero collapse
window.onscroll = function() { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("home").style.height = "0px";
    }
}