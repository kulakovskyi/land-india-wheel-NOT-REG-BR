
const playBtn = document.querySelector('.bonus__main-wheel-btn'),
      main = document.querySelector('.bonus__main'),
      chips = document.querySelectorAll('.bonus__chip'),
      popupChips = document.querySelectorAll('.bonus__overlay-chip'),
      firstWoman = document.querySelector('.bonus__overlay-firstWoman'),
      secondWoman = document.querySelector('.bonus__overlay-secondWoman'),
      wheel = document.querySelector('.bonus__main-wheel-reel'),
      overlay = document.querySelector('.bonus__overlay'),
      popupFirst = document.querySelector('.bonus__firstWin'),
      popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
      popupSecond = document.querySelector('.bonus__secondWin'),
      overflow = document.querySelector('body'),
      video = document.querySelector('.bonus__main-video-bg'),
      wrapper = document.querySelector('.bonus')


const bonusText = document.querySelector('.bonus__main-bubble');

window.onload = videoSource(video, 'img/video.mp4', 'video/mp4');


function videoSource(element, src, type) {
    if(window.innerWidth > 1024) {
        let source = document.createElement('source')
        source.src = src
        source.type = type
        video.appendChild(source)
    }
}

let triesCounter = 0

playBtn.addEventListener('click', () => {

    if (triesCounter === 0) {
        runFirstRotation()

    } else {
        runSecondRotation()
    }
})

function runFirstRotation() {
    wheel.classList.add('reel-rotation-first')
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterFirstRotation()
    }, 6000)
    triesCounter++
}

function doAfterFirstRotation() {
    wheel.style.transform = 'rotate(992deg)'
    wheel.classList.remove('reel-rotation-first')
    overlay.classList.add('win-tab')
    overlay.classList.add('win-mob')
    firstWoman.classList.remove('hide')
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
    setTimeout(() => {
        playBtn.classList.add('pulse-btn')
        playBtn.style.cursor = 'pointer'
        bonusText.style.display = "none"
    }, 1200)
}

function runSecondRotation() {
    wheel.classList.add('reel-rotation-second')
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterSecondRotation()
    }, 6000)
    triesCounter++
}

function doAfterSecondRotation() {
    overlay.classList.add('win-tab')
    overlay.classList.add('win-mob')
    secondWoman.classList.remove('hide')
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'auto'
}


popupFirstBtn.addEventListener('click', () => {
    main.classList.remove('blur')
    firstWoman.classList.add('hide')
    chips.forEach(function (el) {
        el.classList.remove('blur')
    })
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'
    overlay.classList.remove('win-tab')
    overlay.classList.remove('win-mob')
})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
    main.classList.add('blur')
    chips.forEach(function (el) {
        el.classList.add('blur')
    })
    popupChips.forEach(function (el) {
        el.classList.remove('hide')
    })
}

