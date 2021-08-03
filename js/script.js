// Global variables let
let position = 0,
    j = 0

// Global variables const
const slidesToShow = 1,
      slidesToScroll = 1,
      container = document.querySelector('.slider-container'),
      track = document.querySelector('.slider-track'),
      btnPrev = document.querySelector('.btn-prev'),
      btnNext = document.querySelector('.btn-next'),
      dots = document.querySelectorAll('.slider-dots > li'),
      items = document.querySelectorAll('.slider-item'),
      itemsCount = document.querySelectorAll('.slider-item').length,
      itemWidth = container.clientWidth / slidesToShow,
      movePosition = slidesToScroll * itemWidth
      
// Activating dots
dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        dots.forEach(dotActive => {
            dotActive.classList.remove('slide-active')
        })
        dot.classList.add('slide-active')
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth

        // Connecting the slider items with dots (when click to the dot we can change the slide to other)
        switch(dotIndex){
            case 0:
                position = 0
                j = 0
                break;
            case 1:
                position = -itemWidth
                j = 1
                break;
            case 2:
                position = -itemWidth * 2
                j = 2
                break;
            case 3:
                position = -itemWidth * 3
                j = 3
                break;
        }
        console.log(position);
        setPosition()
        checkBtns()

    })
})


// Fixed with for each slider's item
items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
})

// Adding class for slider's items and dots while clicking the btnNext
btnNext.addEventListener('click', () => {
    
    j++
    // Add class for items
    for(let i = 0; i < items.length; i++){
        for(let f = 0; f < items.length; f++){
            items[f].classList.remove('slide-active')
            dots[f].classList.remove('slide-active')
        }
        items[j].classList.add('slide-active')
        dots[j].classList.add('slide-active')
    }
})

// Adding class for slider's items and dots while clicking the btnPrev
btnPrev.addEventListener('click', () => {
    j--
    // Add class for items
    for(let i = 0; i < items.length; i++){
        for(let f = 0; f < items.length; f++){
            items[f].classList.remove('slide-active')
            dots[f].classList.remove('slide-active')
        }
        items[j].classList.add('slide-active')
        dots[j].classList.add('slide-active')
    }
})

// Changing position of slider track while clicking to the btnNext
btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
    setPosition()
    checkBtns()

    
})


// Changing position of slider track while clicking to the btnPrev
btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
    setPosition()
    checkBtns()
})




// Change position function
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}

// Checking btn for state disabled or not
const checkBtns = () => {
    btnPrev.disabled = position === 0 
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
}

// Calling the function for checking buttons everytime
checkBtns()