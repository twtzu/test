var mySwiperCulture = new Swiper(".slider-container-culture", {
    parallax: true,
    speed: 800,
    effect: 'slide',
    direction: "vertical",
    autoplay: true,
    autoplay: {
        delay: 5500,
    },
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle></svg></span>';
        },
    },
    lazy: true,
});

var mySwipersatu = new Swiper('.fcosDua', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiperpagination1",
        clickable: true,
    },
    autoplay: {
        delay: 5500,
    },
    speed: 1000,
    lazy: true,

});

var mySwiperdua = new Swiper('.fcosSatu', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiperpagination2s",
        clickable: true,
    },
    autoplay: {
        delay: 4500,
    },
    speed: 1000,
    lazy: true,
});

var mySwipertiga = new Swiper('.fcosTiga', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiperpagination3",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
    },
    speed: 1000,
    lazy: true,
});
var mySwipernews = new Swiper('.fcosNews', {
    slidesPerVew: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-navBtn-news-n",
        prevEl: ".swiper-navBtn-news-p",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerVew: 5,
        },
        2100: {
            slidesPerVew: 5,
        },
        2800: {
            slidesPerVew: 5,
        },
        3600: {
            slidesPerVew: 5,
        }

    },
    autoplay: {
        delay: 4500,
    },
    speed: 1000,
});
mySwiperCulture();
mySwipersatu();
mySwiperdua();
mySwipertiga();
mySwipernews();
