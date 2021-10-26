const navAnimations = () => {
    const nav = document.querySelector('.nav');
    const navList = document.querySelectorAll('.nav-item');
    const burger = document.querySelector('.burger');
    const gallery = document.querySelector('.gallery');
    const galleryList = document.querySelector('.gallery-list');
    // menu animation
    burger.addEventListener('click', () => {
        if(!nav.classList.contains('show-nav')) {
            nav.classList.add('show-nav')
        } else {
            nav.classList.remove('show-nav')
        }
    })

    // gallery dropdown animation
    gallery.addEventListener('click', () => {
        galleryList.classList.toggle('show-gallery');
    })
};


navAnimations();