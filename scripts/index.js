
const cardsBlocks = document.querySelectorAll('.cards');
const gallery = document.querySelector('.gallery');

initSlider(gallery, '.gallery__item');
cardsBlocks.forEach((cardBlock, number) => {
  initSlider(cardBlock, '.cards__item');
});


function initSlider(sliderBlock, cardItemClassName)
{
  const cardItems = sliderBlock.querySelectorAll(cardItemClassName);
  const cardSlyder = sliderBlock.querySelector('.slider');
  const cardSlyderDots = sliderBlock.querySelectorAll('.slider__dot');

  changeHiddenStatus(cardItems, cardSlyder, cardSlyderDots);
  window.addEventListener('resize', function(event) {
    changeHiddenStatus(cardItems, cardSlyder, cardSlyderDots);
  });

  cardSlyderDots.forEach((dot, number) => {
    dot.addEventListener('click', function() {
      showSlide(cardItems, cardSlyderDots, number);
    });
  });

}

function changeHiddenStatus(items, slyder, dots)
{
  let showAllItems = getComputedStyle(slyder).display !== 'block';

  if (showAllItems) {
    showAllGaleryItems(items);
  } else {
    showSlide(items, dots, 0);
  }
}

function showAllGaleryItems(items)
{
  items.forEach((card, number) => {
    if (number > 0) {
      card.classList.remove('gallery__item_hidden');
    }
  });
}

function showSlide(items, dots, n) {
  items.forEach((card, number) => {
    if (n == number) {
      card.classList.remove('gallery__item_hidden');
      dots[number].classList.add('slider__dot_active');
    } else {
      card.classList.add('gallery__item_hidden');
      dots[number].classList.remove('slider__dot_active');
    }    
  });
}

