"use strict";

import { dishes } from './dishes.js';

console.log(dishes); // проверить, что импорт прошел успешно и массив доступен


// контейнеры для категорий
const soupsContainer = document.getElementById('soups-container');
const mainsContainer = document.getElementById('mains-container');
const drinksContainer = document.getElementById('drinks-container');

// функция для создания HTML-карточки для блюда
function createDishCard(dish) {
  return `
    <div class="menu-item" data-dish="${dish.keyword}">
      <div class="dish-img"><img src="${dish.image}" alt="${dish.name}"></div>
      <p class="price">${dish.price} &#8381;</p>
      <p class="dish-name">${dish.name}</p>
      <p class="dish-weight">${dish.count}</p>
      <button class="btn">Добавить</button>
    </div>
  `;
}

// функция для отображения блюд на странице
function displayDishes() {
  const sortedDishes = dishes.sort((a, b) => a.name.localeCompare(b.name));

  sortedDishes.forEach(dish => {
    const dishCard = createDishCard(dish);
    if (dish.category === 'soup') {
      soupsContainer.insertAdjacentHTML('beforeend', dishCard);
    } else if (dish.category === 'main') {
      mainsContainer.insertAdjacentHTML('beforeend', dishCard);
    } else if (dish.category === 'drink') {
      drinksContainer.insertAdjacentHTML('beforeend', dishCard);
    }
  });
}

// вызов функции для отображения блюд при загрузке страницы
displayDishes();

// контейнер для заказа
const orderContainer = document.getElementById('order-container');
const totalPriceElement = document.getElementById('total-price');

// объект для хранения выбранных блюд
const selectedDishes = {
  soup: null,
  main: null,
  drink: null
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

  for (const category in selectedDishes) {
    const dish = selectedDishes[category];
    
    if (dish) {
      orderContainer.insertAdjacentHTML(
        'beforeend',
        `<p>${dish.name}: ${dish.price} &#8381;</p>`
      );
    } else {
      orderContainer.insertAdjacentHTML(
        'beforeend',
        `<p>${category === 'soup' ? 'Суп' : category === 'main' ? 'Главное блюдо' : 'Напиток'} не выбран</p>`
      );
    }
  }
}

// функция для подсчета и отображения итоговой стоимости
function calculateTotalPrice() {
  const total = Object.values(selectedDishes)
    .filter(dish => dish) // оставляем только выбранные блюда
    .reduce((sum, dish) => sum + dish.price, 0);

  if (total > 0) {
    totalPriceElement.textContent = `Итоговая стоимость: ${total} руб.`;
    totalPriceElement.hidden = false;
  } else {
    totalPriceElement.hidden = true;
  }
}
