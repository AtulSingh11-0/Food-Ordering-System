let imagesData = [
    {
        title : "MEXICAN CUISINE",
        description: "A fun, delicious, and spicy cuisine: Mexican! As one of the world's most popular types of cuisine, Mexican food is full of flavour and colour. The cuisine blends ancient Aztec ingredients with Spanish flavours to create unique dishes sure to tantalise your taste buds.",
        price : "&#x20B9;499 - &#x20B9;1599"
    },
    {
        title : "INDIAN CUISINE",
        description: "Nothing quite matches Indian cuisine. In this incredibly diverse country, their cuisines are far and wide. The flavours and ingredients used vary greatly from region to region, from northern India to south.",
        price : "&#x20B9;899 - &#x20B9;5999"
    },
    {
        title : "ITALIAN CUISINE",
        description: "When it comes to comfort food, Italian dishes reign supreme. Filled with tomato-based sauces, creamy cheese, and pastas galore, it’s no wonder why so many people love this cuisine!",
        price : "&#x20B9;299 - &#x20B9;4599"
    },
    {
        title : "AMERICAN CUISINE",
        description: "Exploring American cuisine can be a fun and exciting experience, offering an array of flavours from different regional cuisines. From North to South and East to West, this melting pot country has incredible variations of dishes and their own twists on them.",
        price : "&#x20B9;499 - &#x20B9;1999"
    },
    {
        title : "JAPANESE CUISINE",
        description: "And now for a trip to the Far East. Japanese cuisine is one of the world's most popular and beloved cuisines. With a focus on freshness, simplicity, and balance, Japanese dishes offer an exciting and flavourful experience.",
        price : "&#x20B9;999 - &#x20B9;6999"
    },
    {
        title : "THAI CUISINE",
        description: "Out of all the types of cuisine in the world, Thai cuisine is probably one of the most exciting. This cuisine is well-renowned for balancing the five fundamental flavours: sweet, sour, salty, bitter and spicy.",
        price : "&#x20B9;499 - &#x20B9;2999"
    }
]

let index = 0;
let len = Array.from(document.getElementsByClassName('main_images')).length * 400;

let imagesOff = () => {
    Array.from(document.getElementsByClassName('main_images')).forEach( (el) => {
        el.style.width = "400px";
        el.style.filter = "blur(1.5px)";
    });
};
let iconOff = () => {
    Array.from(document.getElementsByClassName('icon_images')).forEach( (el) => {
        el.style.transform = "unset";
        el.style.opacity = ".3";
    });
};

document.getElementsByClassName('bi bi-arrow-right-short')[0].addEventListener('click', () => {
    index += 400;
    if (index > (len)-400) {
        index = 0;
    }
    document.getElementsByClassName('images')[0].scrollLeft = index;
    imagesOff();
    document.getElementsByClassName('main_images')[index/400].style.width = "560px";
    document.getElementsByClassName('main_images')[index/400].style.filter = "blur(0px) drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))";
    document.getElementsByClassName('title')[0].innerHTML = imagesData[(index/400)].title;
    document.getElementsByClassName('price')[0].innerHTML = imagesData[(index/400)].price;
    document.getElementsByClassName('description')[0].innerHTML = imagesData[(index/400)].description;
    
    iconOff();
    document.getElementsByClassName('icon_images')[(index/400)].style.transform = "scale(1.1)";
    document.getElementsByClassName('icon_images')[(index/400)].style.opacity = 1;
});

document.getElementsByClassName('bi bi-arrow-left-short')[0].addEventListener('click', () => {
    index -= 400;
    if (index < 0) {
        index = 2000;
    }
    document.getElementsByClassName('images')[0].scrollLeft = index;
    imagesOff();
    document.getElementsByClassName('main_images')[index/400].style.width = "560px";
    document.getElementsByClassName('main_images')[index/400].style.filter = "blur(0px) drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))";
    document.getElementsByClassName('title')[0].innerHTML = imagesData[(index/400)].title;
    document.getElementsByClassName('price')[0].innerHTML = imagesData[(index/400)].price;
    document.getElementsByClassName('description')[0].innerHTML = imagesData[(index/400)].description;
    
    iconOff();
    document.getElementsByClassName('icon_images')[(index/400)].style.transform = "scale(1.1)";
    document.getElementsByClassName('icon_images')[(index/400)].style.opacity = 1;
});

Array.from(document.getElementsByClassName('icon_images')).forEach((el, i) => {
    el.addEventListener('click', () => {
        index = 400 * i;

        document.getElementsByClassName('images')[0].scrollLeft = index;
        imagesOff();
        document.getElementsByClassName('main_images')[index/400].style.width = "560px";
        document.getElementsByClassName('main_images')[index/400].style.filter = "blur(0px) drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))";
        document.getElementsByClassName('title')[0].innerHTML = imagesData[(index/400)].title;
        document.getElementsByClassName('price')[0].innerHTML = imagesData[(index/400)].price;
        document.getElementsByClassName('description')[0].innerHTML = imagesData[(index/400)].description;

        iconOff();
        document.getElementsByClassName('icon_images')[(index/400)].style.transform = "scale(1.1)";
        document.getElementsByClassName('icon_images')[(index/400)].style.opacity = 1;
    });
});