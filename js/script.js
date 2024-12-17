// slider for hero section
$(document).ready(function() {
    $('.my-slider1').slick({
        // dots: true, // Показать точки навигации
        infinite: true, // Бесконечный цикл
        speed: 500, // Скорость анимации
        slidesToShow: 1, // Количество слайдов одновременно
        slidesToScroll: 1, // Количество прокручиваемых слайдов
        fade: true,
        cssEase: 'linear'
    });
});

// slider for reviews section
$(document).ready(function() {
    $('.my-slider2').slick({
        // dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });
});