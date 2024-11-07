// Получаем элементы слайдера
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderImage = document.getElementById('slider-image');
const sliderText = document.getElementById('slider-text');

const slides = [
  {
    imgSrc: 'images/star_defender.png',
    title: 'Star defender',
    description: 'Игра созданная как первый проект, основной механикой является магазин со всевозможной прокачкой: увеличить скорость корабля, добавить скорострельность или жизни.'
  },
  {
    imgSrc: 'images/pc_builder.png',
    title: 'Конфигуратор ПК',
    description: 'Проект для определения совместимости компонентов и их каталогизирование, может также создавать различные конфигурации из представленных компонентов.'
  },
  {
    imgSrc: 'images/photogallery.png',
    title: 'Photochamp',
    description: 'Сайт-imageboard сделанный командой разработчиков.'
  }
];

let currentIndex = 0;

function updateSlide() {
  const slide = slides[currentIndex];
  sliderImage.src = slide.imgSrc;
  sliderText.innerHTML = `<h2>${slide.title}</h2><p>${slide.description}</p>`;
}

// Инициализация первого слайда
updateSlide();

// Обработчики для кнопок
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();