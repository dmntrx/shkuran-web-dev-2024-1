"use strict";

import { dishes } from './dishes.js';

// контейнеры для категорий
const soupsContainer = document.getElementById('soups-container');
const mainsContainer = document.getElementById('mains-container');
const saladsContainer = document.getElementById('salads-container');
const drinksContainer = document.getElementById('drinks-container');
const dessertsContainer = document.getElementById('desserts-container');

// функция для создания карточки блюда
function createDishCard(dish) {
    const card = document.createElement('div');
    card.classList.add('menu-item');
    card.setAttribute('data-dish', dish.keyword);
    card.setAttribute('data-kind', dish.kind);
    card.setAttribute('data-category', dish.category);

    card.innerHTML = `
        <div class="dish-img"><img src="${dish.image}" alt="${dish.name}"></div>
        <p class="price">${dish.price} &#8381;</p>
        <p class="dish-name">${dish.name}</p>
        <p class="dish-weight">${dish.count}</p>
        <button class="btn">Добавить</button>
    `;

    return card;
}

// отображение всех блюд на странице
function renderDishes() {
    // очищаем контейнеры
    soupsContainer.innerHTML = '';
    mainsContainer.innerHTML = '';
    saladsContainer.innerHTML = '';
    drinksContainer.innerHTML = '';
    dessertsContainer.innerHTML = '';

    // создаем карточки для всех блюд и распределяем по категориям
    dishes.forEach(dish => {
        const dishCard = createDishCard(dish);

        switch (dish.category) {
            case 'soup':
                soupsContainer.appendChild(dishCard);
                break;
            case 'main':
                mainsContainer.appendChild(dishCard);
                break;
            case 'salads':
                saladsContainer.appendChild(dishCard);
                break;
            case 'drink':
                drinksContainer.appendChild(dishCard);
                break;
            case 'dessert':
                dessertsContainer.appendChild(dishCard);
                break;
        }
    });
}

// скрытие и отображение блюд на основе фильтров
function filterDishes(category, kind) {
    const foodItems = document.querySelectorAll(`.menu-item[data-category="${category}"]`);

    foodItems.forEach(item => {
        const itemKind = item.getAttribute('data-kind');
        if (kind === null || kind === itemKind) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// удаление активного класса с кнопок
function removeActiveClassFromButtons(buttons) {
    buttons.forEach(button => button.classList.remove('active'));
}

// обработчики для кнопок фильтрации
function addFilterListeners() {
    const categoryButtons = document.querySelectorAll('.filter button');

    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            const kind = e.target.dataset.kind;
            const buttonsInCategory = document.querySelectorAll(`.filter button[data-category="${category}"]`);

            // проверяем, активна ли кнопка
            const isActive = e.target.classList.contains('active');

            if (isActive) {
                e.target.classList.remove('active');
                filterDishes(category, null); // все блюда категории
            } else {
                removeActiveClassFromButtons(buttonsInCategory);
                e.target.classList.add('active');
                filterDishes(category, kind); // применяем фильтр
            }
        });
    });
}

// инициализация страницы
document.addEventListener('DOMContentLoaded', () => {
    renderDishes();
    addFilterListeners();
});



// контейнер для заказа
const orderContainer = document.getElementById('order-container');
const totalPriceElement = document.getElementById('total-price');

// объект для хранения выбранных блюд
const selectedDishes = {
  soup: null,
  main: null,
  salads: null,
  drink: null,
  dessert: null
};

// обработчик добавления блюда в заказ
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    const dishCard = e.target.closest('.menu-item');
    const keyword = dishCard.dataset.dish;

    // находим выбранное блюдо по keyword
    const selectedDish = dishes.find(dish => dish.keyword === keyword);

    // обновляем категорию блюда в заказе
    selectedDishes[selectedDish.category] = selectedDish;

    // обновляем отображение заказа и итоговую стоимость
    updateOrderDisplay();
    calculateTotalPrice();
  }
});

// функция для обновления отображения заказа
function updateOrderDisplay() {
  orderContainer.innerHTML = ''; // очищаем старый заказ

  // для каждой категории выводим выбранное блюдо
  for (const category in selectedDishes) {
    const dish = selectedDishes[category];

    // название категории
    orderContainer.insertAdjacentHTML('beforeend', `<p><strong>${getCategoryName(category)}:</strong></p>`);

    // если блюдо выбрано, вывод с ценой, если нет, вывод "Не выбрано"
    if (dish) {
      orderContainer.insertAdjacentHTML(
        'beforeend',
        `<p>${dish.name} - ${dish.price} &#8381;</p>`
      );
    } else {
      orderContainer.insertAdjacentHTML(
        'beforeend',
        `<p>Не выбрано</p>`
      );
    }
  }
}

// функция для получения названия категории по ключу
function getCategoryName(category) {
  switch (category) {
    case 'soup': return 'Суп';
    case 'main': return 'Главное блюдо';
    case 'salads': return 'Салат или стартер';
    case 'drink': return 'Напиток';
    case 'dessert': return 'Десерт';
    default: return '';
  }
}



// функция для подсчета и отображения итоговой стоимости
function calculateTotalPrice() {
  const total = Object.values(selectedDishes)
    .filter(dish => dish) // оставляем только выбранные блюда
    .reduce((sum, dish) => sum + dish.price, 0);

  if (total > 0) {
    totalPriceElement.textContent = `Итоговая стоимость: ${total} руб.`;
    totalPriceElement.classList.add('total-price'); // для css
    totalPriceElement.hidden = false;
  } else {
    totalPriceElement.hidden = true;
  }
}


// обработчик для кнопки сброса заказа
document.querySelector('button[type="reset"]').addEventListener('click', () => {
  // очищаем объект выбранных блюд
  for (let category in selectedDishes) {
    selectedDishes[category] = null;
  }

  // обновляем отображение заказа
  updateOrderDisplay();

  // скрываем итоговую стоимость
  totalPriceElement.hidden = true;
});



document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // предотвращаем отправку формы

  const errors = [];

  // const selectedDishes = {
  //   soup: document.querySelector('input[name="soup"]:checked') ? true : null,
  //   main: document.querySelector('input[name="main"]:checked') ? true : null,
  //   salads: document.querySelector('input[name="salads"]:checked') ? true : null,
  //   drink: document.querySelector('input[name="drink"]:checked') ? true : null,
  //   dessert: document.querySelector('input[name="dessert"]:checked') ? true : null
  // };

  // Проверка на то, выбрано ли хотя бы одно блюдо
  const isAnyDishSelected = Object.values(selectedDishes).some(dish => dish !== null);

  if (!isAnyDishSelected) {
    errors.push("Ничего не выбрано. Выберите блюда для заказа");
  } else {
    // Проверка на соответствие одному из возможных вариантов комбо
    const isValidCombo =
      (selectedDishes.soup && selectedDishes.main && selectedDishes.salads && selectedDishes.drink) || // суп главное блюдо салат напиток
      (selectedDishes.soup && selectedDishes.main && selectedDishes.drink) || // суп главное блюдо напиток
      (selectedDishes.soup && selectedDishes.salads && selectedDishes.drink) || // суп салат напиток
      (selectedDishes.main && selectedDishes.salads && selectedDishes.drink) || // главное блюдо салат напиток
      (selectedDishes.main && selectedDishes.drink) || // главное блюдо напиток
      (selectedDishes.dessert); // десерт

    if (!isValidCombo) {
      errors.push("Неправильный выбор. Пожалуйста, выберите блюда согласно одному из предложенных вариантов.");
    } else {
      // Проверка на напиток, если все блюда выбраны
      if (Object.values(selectedDishes).every(dish => dish !== null) && !selectedDishes.drink) {
        errors.push("Выберите напиток");
      }

      // Проверка на обязательные блюда, если суп выбран
      if (selectedDishes.soup && !(selectedDishes.main || selectedDishes.salads)) {
        errors.push("Выберите главное блюдо/салат/стартер");
      }

      // Проверка на обязательные блюда, если салат/стартер выбран
      if (selectedDishes.salads && !(selectedDishes.soup || selectedDishes.main)) {
        errors.push("Выберите суп или главное блюдо");
      }

      // Проверка на обязательное главное блюдо, если выбран напиток
      if (selectedDishes.drink && !selectedDishes.main) {
        errors.push("Выберите главное блюдо");
      }

      // Проверка для десерта
      if (!selectedDishes.dessert && (selectedDishes.soup || selectedDishes.main || selectedDishes.salads || selectedDishes.drink)) {
        errors.push("Выберите десерт");
      }
    }
  }

  // Если ошибки есть, показываем первую ошибку
  if (errors.length > 0) {
    showNotification(errors[0]);
  } else {
    // Если ошибок нет, заказ оформляется
    alert("Заказ успешно оформлен!");
    this.submit(); // теперь форма отправляется только если ошибок нет
  }
});

function showNotification(message) {
  // Удаляем предыдущее уведомление, если оно есть
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) existingNotification.remove();

  // Создаем новое уведомление
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
    <p>${message}</p>
    <button class="close-btn">Окей</button>
  `;

  // Добавляем уведомление на страницу
  document.body.appendChild(notification);

  // Логика закрытия уведомления
  const closeButton = notification.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    notification.remove();
  });
}
