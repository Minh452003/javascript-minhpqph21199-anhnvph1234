'use strict';

///////////////////////////////////////
// Lab 5.1

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// ------------------------------
console.log(document.documentElement);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.getElementsByClassName('btn');
// -----------------------------------------
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = "Phùng Quang Minh";
message.innerHTML = 'Phùng Quang Minh. <button class="btn btn--close-cookie">Chọn ngay</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// ----------------------------------------------
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
        message.parentElement.removeChild(message);
    });

// ----------------------------------------------
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');
//------------------------------------------
const logo = document.querySelector('nav_logo');
// console.log(logo.alt);
// console.log(logo.scr);

// logo.alt = `Minh`;

// logo.setAttribute('company', 'Bankist');

// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav_link--btn');
// console.log(logo.dataset.versionNumber);


// --------------LAB5.2--------------------
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
    const slcoords = section1.getBoundingClientRect();
    console.log(slcoords);

    console.log(e.target.getBoundingClientRect());

    console.log('(X/Y', window.pageXOffset, pageYOffset);

    console.log('Height/witdh viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    // scrolling
    window.scrollTo(slcoords.left + window.pageXOffset, slcoords.top + window.pageXOffset);

    window.scrollTo({
        left: slcoords.left + window.pageXOffset,
        top: slcoords.top + window.pageXOffset,
        behavior: 'smooth',
    });

    section1.scrollIntoView({ behavior: 'smooth' });
});


// ---------------------Lab5.3--------------------
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    // console.log('Link', e.target, e.currentTarget);
    // console.log(e.currentTarget === this);
});
// Dừng
// e.stopPropagation();

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    // console.log('Container', e.target, e.currentTarget);

});
document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    // console.log('Nav', e.target, e.currentTarget);

}, true);

// -----------------LAB5.4-------------------------

// document.querySelectorAll('.nav__link').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault();

//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

//-------------------------LAB6.1-----------------------//
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('operations__content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');

    if (!clicked) return;

    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));


    clicked.classList.add('operations__tab--active');

    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');

});
// Reveal
const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

// Ảnh
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//----------------------------LAB6.2-----------------------//
const initiaCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > initiaCoords.top) nav.classList.add('sticky'); else nav.classList.remove('sticky');
});

//-----------------------LAB6.3-6.4--------------------//
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    };

    const activateDot = function (slide) {
        document
            .querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
    };

    const goToSlide = function (slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    };

    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const init = function () {
        goToSlide(0);
        createDots();

        activateDot(0);
    };
    init();
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
};
slider();