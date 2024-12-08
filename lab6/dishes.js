"use strict";

export const dishes = [
  { keyword: 'gazpacho', name: 'Гаспачо', price: 195, category: 'soup', kind: 'soup-vegetarian', count: '350 г', image: 'images/menu/soups/gazpacho.jpg' },
  { keyword: 'mushroom', name: 'Грибной суп-пюре', price: 185, category: 'soup', kind: 'soup-vegetarian', count: '330 г', image: 'images/menu/soups/mushroom_soup.jpg' },
  { keyword: 'norwegian', name: 'Норвежский суп', price: 270, category: 'soup', kind: 'soup-fish', count: '330 г', image: 'images/menu/soups/norwegian_soup.jpg' },
  { keyword: 'ramen', name: 'Рамен', price: 375, category: 'soup', kind: 'soup-meat', count: '425 г', image: 'images/menu/soups/ramen.jpg' },
  { keyword: 'tomyum', name: 'Том ям с креветками', price: 650, category: 'soup', kind: 'soup-fish', count: '500 г', image: 'images/menu/soups/tomyum.jpg' },
  { keyword: 'chicken', name: 'Куриный суп', price: 330, category: 'soup', kind: 'soup-meat', count: '350 г', image: 'images/menu/soups/chicken.jpg' },
  
  { keyword: 'potato', name: 'Жареная картошка с грибами', price: 150, category: 'main', kind: 'main-vegetarian', count: '250 г', image: 'images/menu/main_course/friedpotatoeswithmushrooms1.jpg' },
  { keyword: 'lasagna', name: 'Лазанья', price: 385, category: 'main', kind: 'main-meat', count: '310 г', image: 'images/menu/main_course/lasagna.jpg' },
  { keyword: 'cutlets', name: 'Котлеты из курицы с картофельным пюре', price: 225, category: 'main', kind: 'main-meat', count: '280 г', image: 'images/menu/main_course/chickencutletsandmashedpotatoes.jpg' },
  { keyword: 'fishrice', name: 'Рыбная котлета с рисом и спаржей', price: 320, category: 'main', kind: 'main-fish', count: '270 г', image: 'images/menu/main_course/fishrice.jpg' },
  { keyword: 'pizza', name: 'Пицца Маргарита', price: 450, category: 'main', kind: 'main-vegetarian', count: '470 г', image: 'images/menu/main_course/pizza.jpg' },
  { keyword: 'shrimppasta', name: 'Паста с креветками', price: 340, category: 'main', kind: 'main-fish', count: '280 г', image: 'images/menu/main_course/shrimppasta.jpg' },
  
  { keyword: 'caesar', name: 'Цезарь с цыпленком', price: 370, category: 'salads', kind: 'salads-meat', count: '220 г', image: 'images/menu/salads_starters/caesar.jpg' },
  { keyword: 'caprese', name: 'Капрезе с моцареллой', price: 350, category: 'salads', kind: 'salads-vegetarian', count: '235 г', image: 'images/menu/salads_starters/caprese.jpg' },
  { keyword: 'frenchfries1', name: 'Картофель фри с соусом Цезарь', price: 280, category: 'salads', kind: 'salads-vegetarian', count: '235 г', image: 'images/menu/salads_starters/frenchfries1.jpg' },
  { keyword: 'frenchfries2', name: 'Картофель фри с кетчупом', price: 260, category: 'salads', kind: 'salads-vegetarian', count: '235 г', image: 'images/menu/salads_starters/frenchfries2.jpg' },
  { keyword: 'saladwithegg', name: 'Корейский салат с овощами и яйцом', price: 330, category: 'salads', kind: 'salads-vegetarian', count: '250 г', image: 'images/menu/salads_starters/saladwithegg.jpg' },
  { keyword: 'tunasalad', name: 'Салат с тунцом', price: 480, category: 'salads', kind: 'salads-fish', count: '250 г', image: 'images/menu/salads_starters/tunasalad.jpg' },

  { keyword: 'orange', name: 'Апельсиновый сок', price: 120, category: 'drink', kind: 'cold', count: '300 мл', image: 'images/menu/beverages/orangejuice.jpg' },
  { keyword: 'apple', name: 'Яблочный сок', price: 90, category: 'drink', kind: 'cold', count: '300 мл', image: 'images/menu/beverages/applejuice.jpg' },
  { keyword: 'carrot', name: 'Морковный сок', price: 110, category: 'drink', kind: 'cold', count: '300 мл', image: 'images/menu/beverages/carrotjuice.jpg' },
  { keyword: 'cappuccino', name: 'Капучино', price: 180, category: 'drink', kind: 'hot', count: '300 мл', image: 'images/menu/beverages/cappuccino.jpg' },
  { keyword: 'greentea', name: 'Зеленый чай', price: 100, category: 'drink', kind: 'hot', count: '300 мл', image: 'images/menu/beverages/greentea.jpg' },
  { keyword: 'tea', name: 'Черный чай', price: 90, category: 'drink', kind: 'hot', count: '300 мл', image: 'images/menu/beverages/tea.jpg' },

  { keyword: 'cheesecake', name: 'Чизкейк', price: 240, category: 'dessert', kind: 'small', count: '125 г', image: 'images/menu/desserts/checheesecake.jpg' },
  { keyword: 'baklava', name: 'Пахлава', price: 220, category: 'dessert', kind: 'medium', count: '300 г', image: 'images/menu/desserts/baklava.jpg' },
  { keyword: 'chocolatecheesecake', name: 'Шоколадный чизкейк', price: 260, category: 'dessert', kind: 'small', count: '125 г', image: 'images/menu/desserts/chocolatecheesecake.jpg' },
  { keyword: 'chocolatecake', name: 'Шоколадный торт', price: 270, category: 'dessert', kind: 'small', count: '140 г', image: 'images/menu/desserts/chocolatecake.jpg' },
  { keyword: 'donuts2', name: 'Пончики (3 штуки)', price: 410, category: 'dessert', kind: 'medium', count: '350 г', image: 'images/menu/desserts/donuts2.jpg' },
  { keyword: 'donuts', name: 'Пончики (6 штук)', price: 650, category: 'dessert', kind: 'large', count: '700 г', image: 'images/menu/desserts/donuts.jpg' }
];
