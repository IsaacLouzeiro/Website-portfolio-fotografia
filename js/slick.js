$('.carrossel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            infinite: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 300,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000
        }
        }
    ]
});