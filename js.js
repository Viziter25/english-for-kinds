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

menu.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('menu-item')) {
        menuItem.forEach((item, i) => {
            if (target == item) {
                hideContent();
                showContent(i);
            }
        });
    }
});


// window.addEventListener('DOMContentLoaded', () => { 

//     const tabs = document.querySelectorAll('.tabheader__item');
//     const tabsContent = document.querySelectorAll('.tabcontent');
//     const tabsParent = document.querySelector('.tabheader__items');

    
//     function hideTabsContent() {
//         tabsContent.forEach( item => {
//             item.style.display = 'none';
//             // item.classList.add('hide');
//             // item.classList.remove('show', 'fade');
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
        
//     }
    
//     function showTabsContent(i = 0) {
//         tabsContent[i].style.display = 'block';
//         // tabsContent[i].classList.add('show', 'fade');
//         // tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabsContent();
//     showTabsContent();

//     tabsParent.addEventListener('click', (event) =>{
//         const target = event.target;

//         if(target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hideTabsContent();
//                     showTabsContent(i);
//                 }
//             });
//         }
//     });

// });

