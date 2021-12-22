// Burger menu animation
const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav-item');
const burger = document.querySelector('.burger');

burger.addEventListener('click', showNavigation)
navList.forEach(navListItem => {
    navListItem.addEventListener('click', showNavigation);
});

// show or hide navigation links
function showNavigation() {
    if(!nav.classList.contains('show-nav')) {
        nav.classList.add('show-nav')
    } else {
        nav.classList.remove('show-nav')
    }

    burger.classList.toggle('toggle')
}

// counter section animation
window.addEventListener('scroll', () => {
    if(window.scrollY > 850) {
        startCount();
    }
})

function startCount() {
    const counters = document.querySelectorAll('.counter')
    const speed = 30;
    counters.forEach(counter => {
        function updateCount() {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.match(/\d+/);
            const inc = Math.round(target / speed);
    
            if(count < target) {
                counter.innerText = (count + inc) + "+";
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target + "+";
            }
        }
        updateCount();
    });
}