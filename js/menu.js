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