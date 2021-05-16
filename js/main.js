const sixthSection1 = document.querySelector('.sixth-section__block1');
const sixthSection2 =  document.querySelector('.sixth-section__block2');
const sixthSectionText1 = document.querySelector('.js-sixth-section__text1');
const sixthSectionText2 = document.querySelector('.js-sixth-section__text2');
const sixthSectionTitle1 = document.querySelector('.js-sixth-section_title1');
const sixthSectionTitle2 = document.querySelector('.js-sixth-section_title2');
const imgMinus1 = document.querySelector('.js-img-minus1');
const imgMinus2 = document.querySelector('.js-img-minus2');
const minus1 = document.querySelector('.js-minus1');
const minus2 = document.querySelector('.js-minus2');

const programeBtn = document.querySelector('.js-programe-btn');
const participationBtn = document.querySelector('.js-participation-btn');
const lookingBtn = document.querySelector('.js-looking-btn');
const destinationsBtn = document.querySelector('.js-destinations-btn');
const stagesBtn = document.querySelector('.js-stages-btn');
const contactsBtn = document.querySelector('.js-contacts-btn');
const programe = document.querySelector('.b-first-section');
const participation = document.querySelector('.b-fourth-section');
const looking = document.querySelector('.b-fifth-section');
const destinations = document.querySelector('.b-sixth-section');
const stages = document.querySelector('.b-seventh-section');
const contacts = document.querySelector('.b-footer');
const header = document.querySelector('.b-header');
const scrollTopBtn = document.querySelector('.scroll-top');



const more1 = document.querySelector('.js-more1');
const more1Btn = document.querySelector('.js-more1-btn');
const more2 = document.querySelector('.js-more2');
const more2Btn = document.querySelector('.js-more2-btn');
const more3 = document.querySelector('.js-more3');
const more3Btn = document.querySelector('.js-more3-btn');
const more4 = document.querySelector('.js-more4');
const more4Btn = document.querySelector('.js-more4-btn');

const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.b-menu');
const headerMenuClose = document.querySelector('.menu__close');


document.addEventListener('DOMContentLoaded', function() {

    burger.addEventListener('click', function() {
        headerMenu.classList.add('menu__active');
    });

    headerMenuClose.addEventListener('click', function() {
        headerMenu.classList.remove('menu__active');
    });

    sixthSection1.addEventListener('click', function() {
        sixthSection1.classList.toggle('sixth-section__block1-active');
        sixthSectionText1.classList.toggle('display-none');
        sixthSectionTitle1.classList.toggle('active-text');
        imgMinus1.classList.toggle('img-minus-active');
        minus1.classList.toggle('minus-active');
    });

    sixthSection2.addEventListener('click', function() {
        sixthSection2.classList.toggle('sixth-section__block1-active');
        sixthSectionText2.classList.toggle('display-none');
        sixthSectionTitle2.classList.toggle('active-text');
        imgMinus2.classList.toggle('img-minus-active');
        minus2.classList.toggle('minus-active');
    });

    function scrollTo(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth',
        })
    };

    programeBtn.addEventListener('click', function() {
        scrollTo(programe);
    });

    participationBtn.addEventListener('click', function() {
        scrollTo(participation);
    });

    lookingBtn.addEventListener('click', function() {
        scrollTo(looking);
    });

    destinationsBtn.addEventListener('click', function() {
        scrollTo(destinations);
    });

    stagesBtn.addEventListener('click', function() {
        scrollTo(stages);
    });

    contactsBtn.addEventListener('click', function() {
        scrollTo(contacts);
    });

    scrollTopBtn.addEventListener('click', function() {
        scrollTo(header);
    });

    window.onscroll = function() {
        if (window.scrollY > 700) {
            scrollTopBtn.classList.remove('scroll-top__hide');
        } else {
            scrollTopBtn.classList.add('scroll-top__hide');
        }
    };

    more1Btn.addEventListener('click', function() {
        more1.classList.toggle('more');
        if (more1Btn.textContent === 'Читать далее') {
            more1Btn.textContent = 'Скрыть';
        } else {
            more1Btn.textContent = 'Читать далее';
        }
    });

    more2Btn.addEventListener('click', function() {
        more2.classList.toggle('more');
        if (more2Btn.textContent === 'Читать далее') {
            more2Btn.textContent = 'Скрыть';
        } else {
            more2Btn.textContent = 'Читать далее';
        }
    });

    more3Btn.addEventListener('click', function() {
        more3.classList.toggle('more');
        if (more3Btn.textContent === 'Читать далее') {
            more3Btn.textContent = 'Скрыть';
        } else {
            more3Btn.textContent = 'Читать далее';
        }
    });

    more4Btn.addEventListener('click', function() {
        more4.classList.toggle('more');
        if (more4Btn.textContent === 'Читать далее') {
            more4Btn.textContent = 'Скрыть';
        } else {
            more4Btn.textContent = 'Читать далее';
        }
    });
});