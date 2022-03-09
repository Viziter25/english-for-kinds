window.addEventListener('DOMContentLoaded', () => {


    const menu = document.querySelector('.menu');
    const menuItem = document.querySelectorAll('.menu-item');
    const burger = document.querySelector('.navigation-burger');
    const burgerItem = document.querySelector('.burger-item');
    const blockCategory = document.querySelectorAll('.main-container');
    const link = document.querySelectorAll('.menu-link');
    const cardlink = document.querySelectorAll('.card-link');
    
    const containerCards = document.querySelectorAll('.container-cards');
    // const newPage = document.querySelectorAll('.')


    burger.addEventListener('click', () => {
        menu.classList.toggle('show');
        burgerItem.classList.toggle('active');
        // document.body.style.overflow = 'hidden';
    });


    function hideContent() {
        menuItem.forEach(item => {
            item.classList.remove('active');
            
        });
        blockCategory.forEach(element => {
            element.style.display = 'none';
        });
    }

    function showContent(i = 0) {
        menuItem[i].classList.add('active');
        blockCategory[i].style.display ='block';
        
    }

    hideContent();
    showContent();


    // menuItem.forEach((item, i) => {
    //     item.addEventListener('click', () => {
    //         hideContent();
    //         showContent(i);
    //     });
    // });

    menu.addEventListener('click', (event) => {
        const target = event.target;
        burgerItem.classList.toggle('active');
        menu.classList.toggle('show');
        if (target && target.classList.contains('menu-link')) {
            link.forEach((item, i) => {
                if (target == item) {
                    hideContent();
                    showContent(i);
                    
                }
            });
        }
        
    });

    containerCards.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            hideContent();
            menuItem.forEach((menuItem) => {
               if (item.dataset.id == menuItem.dataset.menu) {
                   menuItem.classList.add('active');
               }
            });
            blockCategory.forEach((block) => {
            
                if (item.dataset.id == block.id) {
                    block.style.display ='block';
                    
                }
            });
        });
    });



    
});



//================== REFRESH CARD


const refresh = document.querySelectorAll('.refresh-a');
const card = document.querySelector('.card');
const cardFace = document.querySelector('.card-face');
const cardBack = document.querySelectorAll('.card-back');
const soundBtn = document.querySelector('.img-sound');

let sound = new Audio();

sound.src = '/sound/space/moon.mp3';

sound.addEventListener('click', () => {
    sound.play();
});

refresh.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        
        const parentFace = event.target.parentElement.parentElement.parentElement;
        const parentBack = parentFace.nextElementSibling;
        parentFace.style.transform = 'rotateY(180deg)';
        parentBack.style.transform = 'rotateY(360deg)';
    });

});

cardBack.forEach((item) => {
    item.addEventListener('mouseleave', (event) => {
        if (event.target.classList.contains('card-back')) {
            const parentBack = event.target;
            const parentFace = parentBack.previousElementSibling;
            parentFace.style.transform = 'rotateY(0deg)';
            parentBack.style.transform = 'rotateY(180deg)';
        }
    }, true);
});



  