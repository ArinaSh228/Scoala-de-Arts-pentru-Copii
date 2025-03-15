// Все обработчики запускаются после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  // Функционал бургер-меню для мобильной версии
  const burger = document.querySelector('.burger');
  const navContent = document.querySelector('.nav-content');
  burger.addEventListener('click', function () {
    navContent.classList.toggle('active');
  });

  // Инициализация Swiper (если на странице есть соответствующий блок)
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });

  // Обработчик для кнопки "Наверх" (при наличии элемента с классом back-to-top)
  $('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
  });

  $(window).scroll(function () {
    let scrolled = $(window).scrollTop();
    if (scrolled > 300) {
      $('.back-to-top').addClass('active');
    } else {
      $('.back-to-top').removeClass('active');
    }
  });
});

// Обработка события window.load для прелоадера (если используется)
window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('preloader-finish');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
});

// Функция "Читать больше/Читать меньше" (если используется на странице)
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше";
    moreText.style.display = "inline";
  }
}

// Пример кода для работы с выбором региона (если используются соответствующие элементы)
var all_regions = [];
var all_cites = [[], [], []];
all_regions[0] = ["lupta sambo", " box ", "kikboxing", "lupta judo", " heltere "];
all_regions[1] = ["Fotbal"];
all_regions[2] = ["Inot"];
all_regions[3] = ["BASCHET", "HANDBAL", " VOLEI", "TENIS DE MASĂ", " TIR", "ORIENTAREA SPORTIVĂ", "GIMNASTICA AEROBICĂ", "HIPISM"];
all_regions[4] = ["ȘAH", "ATLETISM ", "JOC DE DAME"];

country_id.onchange = function () {
  region_id.disabled = false;
  region_id.innerHTML = "<option value='0'>- Выберите секцию -</option>";
  myregion = this.value - 1;
  if (myregion != -1) {
    for (var i = 0; i < all_regions[myregion].length; i++) {
      region_id.innerHTML += '<option value="' + (i + 1) + '">' + all_regions[myregion][i] + '</option>';
    }
  } else {
    region_id.disabled = true;
  }
};

window.addEventListener('load', function() {
const preloader = document.querySelector('.preloader');
preloader.classList.add('preloader-finish');
setTimeout(() => {
 preloader.style.display = 'none';
}, 500);
});


$('.back-to-top').click(function () {
$('body,html').animate({ scrollTop: 0}, 800); // 800 - Скорость анимации
});

$(window).scroll(function() { // Отслеживаем начало прокрутки
let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

if(scrolled > 300) { // Если высота прокрутки больше 350 - показываем кнопку
$('.back-to-top').addClass('active');
} else {
$('.back-to-top').removeClass('active');
}
});

/*---Перевод---*/
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
      { pageLanguage: 'ro', includedLanguages: 'ru,es,fr,de,it', autoDisplay: false },
      'google_translate_element'
  );
}
