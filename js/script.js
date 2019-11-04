//dropdown
(function () {
    let openBrand = document.getElementById('openBrand')
    if (openBrand) {
        openBrand.addEventListener("click", () => {
            document.querySelector(".brands").classList.toggle('opened');
            openBrand.classList.toggle('opened');
        }, false);
    }
})();

//dropdown
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

$(document).ready(function () {
    //add to card popup
    let toCard = function () {
        $(".buy-button").click(function () {
            let src = $(this).parents(".catalog-elem").find("img").attr("src")
            let name = $(this).parents(".catalog-elem").find(".name").text()
            $(".pop-img").attr("src", src)
            $(".popup-name").text(name)
            openPopup()
        })
        $(".close-button-buy, .continue-buy").click(function () {
            closePopup()
        })

        function openPopup() {
            $("#buyPopup").fadeIn()
        }

        function closePopup() {
            $("#buyPopup").fadeOut()
        }

    }
    toCard()

    //dropdown
    $('.type-choose-catalog-element button').click(function () {
        $(this).parents().siblings(".type-choose-catalog-element").removeClass('opened');
        $(this).parents().siblings(".type-choose-catalog-element").children().children().children().removeClass('opened');
        $(this).parents(".type-choose-catalog-element").toggleClass('opened');
        $(this).toggleClass('opened');
    });

    //callback popup
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });

    //homepage carousel
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