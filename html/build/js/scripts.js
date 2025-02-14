// Custom Scripts
// Custom scripts

function slider() {
  const container = document.querySelector('.modal-choose__slider ');

  if (!container) {
    return null
  }

  const swiper = new Swiper(".modal-choose__slider", {
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 10,
  });
}

slider();

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.gift-upgrade__line', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    on: {
      init: function () {
        updateSlidePositions(this);
      },
      slideChange: function () {
        updateSlidePositions(this);
      }
    }
  });

  function updateSlidePositions(swiper) {
    const slides = swiper.slides;
    slides.forEach((slide, index) => {
      let angle = (index - (swiper.activeIndex - swiper.loopedSlides)) * 15;
      gsap.to(slide, {
        rotate: angle,
        transformOrigin: '50% 100%',
        scale: index === swiper.activeIndex ? 1 : 0.8,
        opacity: index === swiper.activeIndex ? 1 : 0.5,
        duration: 0.5
      });
    });
  }
});

const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});
