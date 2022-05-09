const tabs = document.getElementById('tabs');
const contents = document.getElementById('contents');
const tabsEl = Array.from(document.querySelectorAll('.tab-btn'));

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

for(let index = 0; index < tabsEl.length; index++) {
    tabsEl[index].addEventListener('click', e => {
            const currTab = e.target.dataset.btn;
            changeClass(e.target);
            for(let i = 0; i < contents.children.length; i++) {
                contents.children[i].classList.remove('active');
                if(contents.children[i].dataset.content == currTab) {
                    contents.children[i].classList.add('active');
                }
            }
    });
}

const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const modal = document.getElementById('wrapper-modal');
const overlay = document.getElementById('overlay');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
})

const closeModal = () => {
    modal.classList.remove('active');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),  
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      slidesWrap = document.querySelectorAll('.slider-wrapper');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}
 
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);