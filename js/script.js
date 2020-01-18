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
            button.style.display = "none"
        }, false)
    }
})();

$(document).ready(function () {
    $("#openButton").click(function () {
        $(".menu ul").slideToggle()
    })
    $(".sub-menu").click(function () {
        $(".menu ul .choose-type-wrapper ").toggleClass("opened")
    })
    //add to card popup
    let toCard = (function () {
        let buyButton = $("#buyPopup");
        $(".buy-button").click(function () {
            openPopup()
            fillLines.call(this)
            priceDetection.call(this)
            condition.call(this)
        })
        $(".close-button-buy, .continue-buy").click(function () {
            closePopup()
        })
        function fillLines(){
            let src = $(this).parents(".catalog-elem").find("img").attr("src")
            let name = $(this).parents(".catalog-elem").find(".name").text()
            $(".pop-img").attr("src", src)
            $(".popup-name").text(name)
        }
        function openPopup() {
            buyButton.fadeIn()
        }
        function closePopup() {
            buyButton.fadeOut()
        }
        function priceDetection() {
            let price = $(this).parents(".catalog-elem").find(".price");
            let actual = price.children(".actual").text();
            let newI = price.children(".new").text();
            $(".price-name").text(actual || newI)
        }
        function condition() {
            let conditionItem = $(this).parents(".elem-text").find(".condition").data('condition')
            if (conditionItem) {
                $(".condition-yes").css("display", "flex")
                $(".condition-no").css("display", "none")
            } else {
                $(".condition-no").css("display", "flex")
                $(".condition-yes").css("display", "none")
            }
        }
    })();


    //dropdown
    $('.type-choose-catalog-element button').click(function () {
        $(this).parents().siblings(".type-choose-catalog-element").removeClass('opened');
        $(this).parents().siblings(".type-choose-catalog-element").children().children().children().removeClass('opened');
        $(this).parents(".type-choose-catalog-element").toggleClass('opened');
        $(this).toggleClass('opened');
        $(document).mouseup(function(e){
           let container = $(".type-choose-catalog-element")
           if (!container.is(e.target) && container.has(e.target).length === 0) { 
                container.removeClass('opened');
		    }
        })
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
            breakpoint: 991,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: "0px",
                slidesToShow: 1,
                swipe: true
            }
        }]
    });
});