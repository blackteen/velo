(function () {
    let openBrand = document.getElementById('openBrand')
    if (openBrand) {
        openBrand.addEventListener("click", () => {
            document.querySelector(".brands").classList.toggle('opened');
            openBrand.classList.toggle('opened');
        }, false);
    }
})();

(function () {
    let links = document.querySelectorAll(".filter-link");
    let button = document.getElementById('more');
    if (button) {
        [...links].splice(0, 8).forEach(el => {
            el.classList.add('vissible')
        });
        button.addEventListener("click", () => {
            [...links].forEach(el => {
                el.classList.add('vissible')
            });
        }, false)
    }
})();
$(document).ready(function(){
    $('.type-choose-catalog-element button').click(function () {
        $(this).parents().siblings(".type-choose-catalog-element").removeClass('opened');
        $(this).parents().siblings(".type-choose-catalog-element").children().children().children().removeClass('opened');
        $(this).parents(".type-choose-catalog-element").toggleClass('opened');
        $(this).toggleClass('opened');
    });
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true
    });
    $("#carousel").slick({
        centerMode: true,
        centerPadding: "5px",
        slidesToShow: 3,
        swipe: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
                swipe: true
            }
        }]
    });
});
