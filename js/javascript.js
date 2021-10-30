//Efeito deslizante para link Ancora
var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

// Ocultar/Mostrar de acordo com o Scroll da Página
// Botão que leva de volta para o topo da pagina
var logo = $("#botao-to-top");
$(document).scroll( function() {
var scroll = $(document).scrollTop();
if(scroll >= 147)  $("#botao-to-top").css("display", "block");
if(scroll < 146 ) $("#botao-to-top").css("display", "none");
});                     


// ANIMAR OS BLOCOS CONFORME O SCROLL NO SITE

// SOBRE MIM
// var logo = $("#texto-sobre-mim");
// $(document).scroll( function() {
// var scroll = $(document).scrollTop();
// if(scroll >= 147)  $("#texto-sobre-mim").css("animation-play-state", "running");
// if(scroll < 146 ) $("#texto-sobre-mim").css("animation-play-state", "paused");
// });

// $("#texto-sobre-mim").offset().top

// $(document).scroll( function() {

// if ($("#texto-sobre-mim").offset().top > $(document).scrollTop()) $("#texto-sobre-mim").css("animation-play-state", "running");

// if ($("#texto-sobre-mim").offset().top < $(document).scrollTop()) $("#texto-sobre-mim").css("animation-play-state", "paused");

// });

// PORTIFOLIO
var logo = $("#bloco-portifolio");
$(document).scroll( function() {
var scroll = $(document).scrollTop();
if(scroll >= 700)  $("#bloco-portifolio-anima").css("animation-play-state", "running");
if(scroll < 146 ) $("#bloco-portifolio-anima").css("animation-play-state", "paused");
});