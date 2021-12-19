const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav-item');
const burger = document.querySelector('.burger');
// menu animation
burger.addEventListener('click', () => {
    if(!nav.classList.contains('show-nav')) {
        nav.classList.add('show-nav')
    } else {
        nav.classList.remove('show-nav')
    }
})

navList.forEach(navListItem => {
    navListItem.addEventListener('click', () => {
        if(!nav.classList.contains('show-nav')) {
            nav.classList.add('show-nav')
        } else {
            nav.classList.remove('show-nav')
        }
    });
});