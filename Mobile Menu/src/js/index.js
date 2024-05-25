const allMenu = document.querySelectorAll('.mobile-bottom li');
const sideLeft=  document.querySelector('.mobile-bottom .side-left');

allMenu.forEach((menu,i) => {
    menu.addEventListener('click', () => {
        sideLeft.style.transform = `translateY(${55 * i}px)`
    }) 
})