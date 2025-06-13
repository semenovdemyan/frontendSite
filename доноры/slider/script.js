const elements = {
  sidebar: document.querySelector('.sidebar'),
  mainSlide: document.querySelector('.main-slide'),
}

const slidesCount = elements.mainSlide.children.length
let activeIndex = 0
let isAnimating = false
let touchStartY = 0

function initSlider() {
  elements.sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
}

function changeSlide(direction) {
  if (isAnimating) return
  isAnimating = true

  const prevIndex = activeIndex
  activeIndex =
    direction === 'down'
      ? (activeIndex + 1) % slidesCount
      : (activeIndex - 1 + slidesCount) % slidesCount

  elements.mainSlide.style.transform = `translateY(-${activeIndex * 100}vh)`
  elements.sidebar.style.transform = `translateY(${activeIndex * 100}vh)`

  setTimeout(() => (isAnimating = false), 200)
}

function setupEventListeners() {

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') changeSlide('up')
    if (e.key === 'ArrowDown') changeSlide('down')
  })

  document.addEventListener(
    'touchstart',
    (e) => {
      touchStartY = e.touches[0].clientY
    },
    { passive: true }
  )

  document.addEventListener(
    'touchend',
    (e) => {
      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY - touchEndY
      if (Math.abs(diff) > 50) {
        changeSlide(diff > 0 ? 'down' : 'up')
      }
    },
    { passive: true }
  )

  window.addEventListener(
    'wheel',
    (e) => {
      if (Math.abs(e.deltaY) < 30) return
      changeSlide(e.deltaY > 0 ? 'down' : 'up')
    },
    { passive: true }
  )
}

initSlider()
setupEventListeners()
