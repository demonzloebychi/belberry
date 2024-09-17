

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const menuItems = document.querySelectorAll('.menu-header__item');

if (burger) {
    burger.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menuItems.forEach(item => {
        const subMenu = item.querySelector('.sub__menu-header');
        const arrow = item.querySelector('.arrow');

        if (subMenu) {
            // Обработчик для стрелки
            arrow.addEventListener('click', function(e) {
                e.preventDefault(); // Отменяем переход по ссылке
                subMenu.classList.toggle('open'); // Открываем/закрываем подменю
                arrow.classList.toggle('active'); // Меняем состояние стрелки
            });
        }

        // Обработчик для ссылки
        const link = item.querySelector('a');
        link.addEventListener('click', function(e) {
            if (subMenu && subMenu.classList.contains('open')) {
                // Если подменю открыто, не переходим по ссылке
                e.preventDefault();
            } else {
                // Иначе переходим по ссылке
                window.location.href = link.href; 
            }
        });
    });
}






// const burger = document.querySelector('.header__burger');
// const menu = document.querySelector('.header__nav');
// const link = document.querySelector('.menu-header__item')
// const menuItems = document.querySelectorAll('.menu-header__item');


// if (burger){
//     burger.addEventListener("click", function(e){
//         document.body.classList.toggle('lock');
//         burger.classList.toggle('active');
//         menu.classList.toggle('active');
//     });

//     // menu.querySelectorAll('.menu-header__item').forEach(link => {
//     //     link.addEventListener('click', function(e) {
//     //         document.body.classList.remove('lock');
//     //         menu.classList.remove('active');
//     //         burger.classList.remove('active');
//     //     })
//     // })


//     menuItems.forEach(item => {
//         item.addEventListener('click', function(e) {
//             // Проверяем, если это мобильное устройство
//             if (window.innerWidth <= 1220) {
//                 const subMenu = item.querySelector('.sub__menu-header');
//                 if (subMenu) {
//                     subMenu.classList.toggle('open'); // Переключаем класс для открытия/закрытия подменю
//                 }
//             } else {
//                 // На ПК закрываем меню при выборе элемента
//                 document.body.classList.remove('lock');
//                 menu.classList.remove('active');
//                 burger.classList.remove('active');
//             }
//         });
//     });
    
// }


// const burger = document.querySelector('.header__burger');
// const menu = document.querySelector('.header__nav');
// const menuItems = document.querySelectorAll('.menu-header__item');

// if (burger) {
//     burger.addEventListener("click", function(e) {
//         document.body.classList.toggle('lock');
//         burger.classList.toggle('active');
//         menu.classList.toggle('active');
//     });

//     menuItems.forEach(item => {
//         let clickCount = 0; // Счетчик нажатий

//         item.addEventListener('click', function(e) {
//             const subMenu = item.querySelector('.sub__menu-header');

//             // Проверяем, есть ли подменю
//             if (subMenu) {
//                 e.preventDefault(); // Отменяем переход по ссылке
//                 clickCount++;

//                 // Если нажали дважды, переходим по ссылке
//                 if (clickCount === 2) {
//                     window.location.href = item.querySelector('a').href; // Переход по ссылке
//                     clickCount = 0; // Сбрасываем счетчик
//                 } else {
//                     subMenu.classList.toggle('open'); // Открываем/закрываем подменю
//                     setTimeout(() => {
//                         clickCount = 0; // Сбрасываем счетчик через 300 мс
//                     }, 3000); // Задержка для предотвращения двойного клика
//                 }
//             } else {
//                 // На ПК закрываем меню при выборе элемента
//                 document.body.classList.remove('lock');
//                 menu.classList.remove('active');
//                 burger.classList.remove('active');
//             }
//         });
//     });
// }









// let body = document.querySelector('body');
//     body.classList.add('touch');
    
//     let arrow = document.querySelectorAll('.arrow');
// for(i=0;i<arrow.length; i++){
//     let thisLink = arrow[i].previousElementSibling;
//     let subMenu = arrow[i].nextElementSibling;
//     let thisArrow = arrow[i];

//     thisLink.classList.add('parent');
//   arrow[i].addEventListener('click', function(){
//     subMenu.classList.toggle('open');
//     thisArrow.classList.toggle('active');
//   });
// };


//   let rar = document.querySelectorAll('.disabled-link');
// for(i=0;i<arrow.length; i++){
//     let thisLink = rar[i].previousElementSibling;
//     let subMenu = rar[i].nextElementSibling;
//     let thisArrow = rar[i];

//     thisLink.classList.add('parent');
//     rar[i].addEventListener('click', function(){
//     subMenu.classList.toggle('open');
//     thisArrow.classList.toggle('active');
//   });
// };

// const dis = document.querySelectorAll('.disabled-link');
// const subm = document.querySelectorAll('.sub-menu__list');

// if (dis){
//   dis.addEventListener("click", function(e){
//     dis.classList.toggle('active');
//     subm.classList.toggle('active');
// });
// }