const start = document.querySelector('#start');
const moon = document.querySelector('#moon');
const behind = document.querySelector('#behind');
const front = document.querySelector('#front');
const text = document.querySelector('#text');
const explore = document.querySelector('#explore');

function handleWindowScroll(){
    let windowScrollY = window.scrollY;

    moon.style.top = windowScrollY * 2.25 + 'px';

    start.style.left = windowScrollY * 0.23 + 'px';

    text.style.right = windowScrollY * 5 + 'px';

    explore.style.marginTop = windowScrollY * 5 + 'px';
}

window.addEventListener('scroll', handleWindowScroll)