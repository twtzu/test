(function($) {

    "use strict";
    // This function will be called when the YouTube API is ready



    // This function will be called when the video player is ready
    function onPlayerReady(event) {
        event.target.playVideo(); // Autoplay the video when ready
    }
    var docWidth = document.documentElement.offsetWidth;
    [].forEach.call(
        document.querySelectorAll('*'),
        function(el) {
            if (el.offsetWidth > docWidth) {
                console.log(el);
            }
        }
    );

    // fetch('data.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Get a reference to the container where you want to display the items
    //         const container = document.querySelector('.swiper-wrapper');

    //         // Iterate through the data and create elements for each item
    //         data.forEach(item => {
    //             // Create a new culture item container
    //             const cultureItem = document.createElement('div');
    //             cultureItem.classList.add('content-culture-item', 'swiper-slide');

    //             // Create elements for the culture item
    //             const imageWrap = document.createElement('div');
    //             imageWrap.classList.add('culture-image-wrap');

    //             const imgCulture = document.createElement('img');
    //             imgCulture.classList.add('img-culture');
    //             imgCulture.src = item.imageURL;

    //             const contentWrap = document.createElement('div');
    //             contentWrap.classList.add('culture-content-wrap');

    //             const titleCulture = document.createElement('h3');
    //             titleCulture.classList.add('title-culture');
    //             titleCulture.dataset.swiperParallaxY = '-150';
    //             titleCulture.dataset.swiperParallaxDuration = '800';
    //             titleCulture.textContent = item.title;

    //             const descriptionCulture = document.createElement('div');
    //             descriptionCulture.classList.add('description-culture');
    //             descriptionCulture.dataset.swiperParallaxY = '-200';
    //             descriptionCulture.dataset.swiperParallaxDuration = '1400';

    //             const cultureDescription = document.createElement('p');
    //             cultureDescription.classList.add('culture-description');
    //             cultureDescription.textContent = item.description;

    //             const buttonCulture = document.createElement('div');
    //             buttonCulture.classList.add('button-culture');
    //             buttonCulture.dataset.swiperParallaxY = '-300';
    //             buttonCulture.dataset.swiperParallaxDuration = '1500';

    //             const link = document.createElement('a');
    //             link.classList.add('link', 'link--arrowed');
    //             link.href = '#';
    //             link.textContent = 'read more';

    //             const arrowIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    //             arrowIcon.classList.add('arrow-icon');
    //             arrowIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    //             arrowIcon.setAttribute('width', '28');
    //             arrowIcon.setAttribute('height', '28');
    //             arrowIcon.setAttribute('viewBox', '0 0 32 32');

    //             const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    //             circle.classList.add('arrow-icon--circle');
    //             circle.setAttribute('cx', '16');
    //             circle.setAttribute('cy', '16');
    //             circle.setAttribute('r', '15.12');

    //             const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    //             path.classList.add('arrow-icon--arrow');
    //             path.setAttribute('d', 'M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98');

    //             // Append the elements to the culture item container
    //             descriptionCulture.appendChild(cultureDescription);
    //             buttonCulture.appendChild(link);
    //             buttonCulture.appendChild(arrowIcon);
    //             arrowIcon.appendChild(circle);
    //             arrowIcon.appendChild(path);
    //             contentWrap.appendChild(titleCulture);
    //             contentWrap.appendChild(descriptionCulture);
    //             contentWrap.appendChild(buttonCulture);
    //             imageWrap.appendChild(imgCulture);
    //             cultureItem.appendChild(imageWrap);
    //             cultureItem.appendChild(contentWrap);

    //             // Append the culture item container to the main container
    //             container.appendChild(cultureItem);
    //         });
    //     })
    //     .catch(error => console.error('Error fetching data:', error));

    var mySwiperCulture = new Swiper(".slider-container-culture", {
        parallax: true,
        speed: 800,
        effect: 'slide',
        direction: "vertical",
        autoplay: true,
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
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
    });

    var mySwiperdua = new Swiper('.fcosSatu', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiperpagination2s",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 4500,
        },
        speed: 1000,
    });

    var mySwipertiga = new Swiper('.fcosTiga', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiperpagination3",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 6000,
        },
        speed: 1000,
    });

    mySwiperCulture();
    mySwipersatu()
    mySwiperdua()
    mySwipertiga()

})(jQuery);