window.addEventListener('DOMContentLoaded', () => {
'use sctrict';

    const menu = document.querySelector('.menu');
    const menuItem = document.querySelectorAll('.menu-item');
    const burger = document.querySelector('.navigation-burger');
    const burgerItem = document.querySelector('.burger-item');
    // const newPage = document.querySelectorAll('.')


    burger.addEventListener('click', () => {
        menu.classList.toggle('show');
        burgerItem.classList.toggle('active');
    });


    function hideContent() {
        // newPage.forEach(element => { новые стр
        //     element.style.display = 'none';
        // });
        menuItem.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showContent(i = 0) {
        // newPage[i].style.display ='block'; новые стр
        menuItem[i].classList.add('active');
    }

    hideContent();
    showContent();


    menuItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            hideContent();
            showContent(i);
        });
    });



    // menu.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('menu-item')) {
    //         menuItem.forEach((item, i) => {
    //             if (target == item) {
    //                 hideContent();
    //                 showContent(i);
    //             }
    //         });
    //     }
    // });


});



//================== REFRESH CARD


const refresh = document.querySelector('.refresh-a');
const card = document.querySelector('.card');
const cardFace = document.querySelector('.card-face');
const cardBack = document.querySelector('.card-back');



refresh.addEventListener('click', (event) => {
    event.preventDefault();
    cardFace.style.display = 'none';
    cardBack.style.display = 'block';
});

cardBack.addEventListener('mouseout', () => {
    cardFace.style.display = 'block';
    cardBack.style.display = 'none';
});