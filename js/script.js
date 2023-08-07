$('.owl-carousel').owlCarousel({
    autoplay: false,
    smartSpeed: 1500,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    autoWidth: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});


// Get Elements
let body = document.querySelectorAll('[data-hide="hide"]');
let buttonScroll = document.getElementById("buttonScroll");
let waviy = document.getElementById("waviy");
let inputSearch = document.getElementById("inputSearch");
let nav = document.getElementById("nav");
let buttonSearch = document.getElementById("buttonSearch");
let close = document.getElementById("closeButton");
let copyNav = `
        <div class="container-lg">
        <a class="navbar-brand" href="#"><img src="./images/logo.png" class="logo" /></a>
        <div class="position-relative flex-grow-1 inputSearch" id="inputSearch">
            <input type="text" placeholder="Search products, articles, faq, ..." />
            <img src="./images/Search.png" alt="" class="imgSearch">
            <img src="./images/frame.png" alt="" class="imgFrame">
            <button class="close" id="closeButton">X</button>
        </div>
        <button class="buttonSearch" id="buttonSearch"><img src="./images/Search.png" alt=""
                class="imgSearch"></button>
        <div class="d-flex justify-between align-items-center">
            <div class="d-none d-md-block">
                <ul class="d-flex align-items-center ul-1">
                    <li class="d-flex"> <img src="./images/findAStore.png" alt=""> Find a store</li>
                    <li class="d-flex"><img src="./images/Support.png" alt=""> Support</li>
                </ul>
            </div>
            <div class="d-flex">
                <img src="./images/Heart.png" alt="">
                <img src="./images/Account.png" alt="" class="ms-2">
                <img src="./images/Cart.png" alt="" class="ms-2">
            </div>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">ABOUT US</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">%OFFERS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">CONCESSIONS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">GROCERIES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">TOBACCO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">DRINKS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">CANDY & GUM</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">HOME & HEALTH</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">AUTOMOTIVES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">STORE USE</a>
            </li>
        </ul>
        </div>

`


buttonSearch.addEventListener('click', (e) => {
    let div = document.createElement('div');
    inputSearch.style.display = 'block';
    close.style.display = 'inline-block';
    div.appendChild(inputSearch)
    nav.innerHTML = '';
    nav.innerHTML = div.innerHTML;
    nav.querySelector('button').addEventListener('click', (e) => {
        inputSearch.style.display = 'none';
        nav.innerHTML = '';
        nav.innerHTML = copyNav
        close.style.display = 'none';
        inputSearch = nav.querySelector('#inputSearch');
        buttonSearch = nav.querySelector('#buttonSearch');
        close =  nav.querySelector('#closeButton');
    })
})






window.onscroll = function () {
    if (window.scrollY >= 300) {
        buttonScroll.style.opacity = "1";
    } else {
        buttonScroll.style.opacity = "0";
    }

    buttonScroll.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}

// Start Website
body.forEach(element=>{
    element.style.display = "none";
});

// After 4 sec from start
window.onload = function () {
    setTimeout(() => {
        new WOW().init();
        body.forEach(element=>{
            element.style.display = "block";
        });
        waviy.style.display = "none";
    }, 3000)
};
