function carousel(){
    $('#carrossel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
}
$(document).ready( function(){
    carousel();
});