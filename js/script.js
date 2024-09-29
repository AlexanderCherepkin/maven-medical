
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')
let currentIndex = 0

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(currentIndex + 1)
})

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(currentIndex - 1)
})

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeSlide(index)
    })
})

function changeSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0
    } else if (index < 0) {
        currentIndex = slides.length - 1
    } else {
        currentIndex = index
    }

    const slider = document.querySelector('.slider')
    if (slider) {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`
    }

    dots.forEach(dot => dot.classList.remove('active'))
    dots[currentIndex].classList.add('active')
}

/*************************************************************************/

// Фреймы
const frames = document.querySelector('.frames')
const frame = document.querySelectorAll('.frame')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
let index = 0

function showFrame(index) {
    if (frames) { // Проверка на существование элемента
        frames.style.transform = `translateX(${-index * 100}%)`
    }
}

if (prev && next) { // Проверка на существование кнопок
    prev.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : frame.length - 1
        showFrame(index)
    });

    next.addEventListener('click', () => {
        index = (index < frame.length - 1) ? index + 1 : 0
        showFrame(index)
    })
}

// Автоматическая прокрутка (опционально)
setInterval(() => {
    index = (index < frame.length - 1) ? index + 1 : 0
    showFrame(index)
}, 7000) // смена слайда каждые 5 секунд

/**************************************************************/

// Меню
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle')
    const menuList = document.getElementById('menuList')

    // Проверяем, что элементы существуют
    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', function () {
            menuList.classList.toggle('active')
        })
    }
});

/***************************************************************/

const menuLinks = document.querySelectorAll('.menu__list-link, .menu-block__list-link, .menu__lists-link')

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const targetId = this.getAttribute('href') 
        const targetElement = document.querySelector(targetId) 

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' 
            })
        }
    })
});

/*************************************************************/

document.querySelector('a[href="#smooth"]').addEventListener('click', function (e) {
    e.preventDefault() // Отменяем стандартное поведение ссылки
    window.scrollTo({
        top: 0, // Скроллим вверх
        behavior: 'smooth' // Плавный скролл
    })
});





