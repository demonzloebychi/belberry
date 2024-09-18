 // Массив специализаций врачей
 const specializations = ["Андролог", "Диетолог", "Педиатр", "Узи", "Ведение беременности", "Кардиолог", "Психиатр", "Уролог", "Врач пренатальной диагностики", "Консультант по грудному вскармливанию", "Психиатр", "Уролог-хирург", "Психолог", "Хирург", "Гастроэнтеролог", "Маммолог", "Психотерапевт", "Эмбриолог", "Гематолог", "Невролог", "Пульмонолог", "Эндокринолог", "Генетик", "Нефролог", "Ревматолог", "Гинеколог", "Онколог", "Репродуктолог", "Гинеколог-хирург"];


// Функция для создания списка
function createDoctorList(specializations) {
    const listContainer = document.getElementById('doctorList');
    let currentLetter = '';
    let firstItemInGroup = true; // Флаг для отслеживания первого элемента в группе

    // Сортируем специализации по алфавиту
    specializations.sort();

    specializations.forEach(specialization => {
        // Получаем первую букву специализации
        const firstLetter = specialization.charAt(0);

        // Если буква изменилась, добавляем новую специализацию
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            firstItemInGroup = true; // Сбрасываем флаг при смене буквы
        }

        // Создаем элемент списка
        const item = document.createElement('li');
        item.textContent = specialization;
        item.className = 'doctor-item';
        if (firstItemInGroup) {
            item.setAttribute('data-letter', currentLetter); // Устанавливаем атрибут с буквой только для первого элемента группы
            firstItemInGroup = false; // Устанавливаем флаг в false после первого элемента
        }
        
        listContainer.appendChild(item); // Добавляем элемент в контейнер списка
    });
}

// Создаем список на основе массива
createDoctorList(specializations);