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
    // Assuming you have a JSON file named 'data.json' with an array of objects
    // Assuming you have a JSON file named 'data.json' with an array of objects
    // Assuming you have a JSON file named 'data.json' with an array of objects
    // Assuming you have a JSON file named 'data.json' with an array of objects
    // Assuming you have a JSON file named 'data.json' with an array of objects
    // Assuming you have a JSON file named 'data.json' with an array of objects
    // Assuming you have a JSON file named 'data.json' with an array of objects
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Get a reference to the container where you want to display the items
            const container = document.querySelector('.culture-container');

            // Get the template element
            const template = document.querySelector('.culture-template');

            // Iterate through the data and create elements for each item
            data.forEach(item => {
                // Clone the template to create a new culture item
                const cultureItem = template.cloneNode(true);

                // Update the cloned elements with data from the JSON item
                const imgCulture = cultureItem.querySelector('.img-culture');
                imgCulture.src = item.imageURL;

                const titleCulture = cultureItem.querySelector('.title-culture');
                titleCulture.textContent = item.title;

                const descriptionCulture = cultureItem.querySelector('.description-culture');
                const cultureDescription = descriptionCulture.querySelector('p');
                cultureDescription.textContent = item.description;

                const link = cultureItem.querySelector('.link--arrowed');
                link.href = item.readMore;

                // Display the cloned culture item
                cultureItem.style.display = 'block';

                // Append the cloned culture item to the container
                container.appendChild(cultureItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

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