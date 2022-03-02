const scrollUpBtn = document.getElementsByClassName('scroll-up')[0];

window.addEventListener('scroll', trackScroll);
scrollUpBtn.addEventListener('click', () => {
    scrollUp();
    updateURL();
});

function trackScroll() {
    var scrolled = window.pageYOffset;
    var windowHeight = document.documentElement.clientHeight;

    if (scrolled > windowHeight) {
        scrollUpBtn.classList.add('visible');
    }

    if (scrolled < windowHeight) {
        scrollUpBtn.classList.remove('visible');
    }  
}

function scrollUp() {
    window.scrollTo(0, 0);
}

function updateURL() {
    let anchor = window.location.href.indexOf('#');
    if (anchor >= 0) {
        window.location.href = window.location.href.slice(0, anchor);
    }
}
