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