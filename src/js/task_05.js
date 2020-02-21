'use strict';

// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке,
// то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const countryChina = 'Китай';
const countryChile = 'Чили';
const countryAustralia = 'Австралия';
const countryIndia = 'Индия';
const countryJamaica = 'Ямайка';
let cost;

let inputValue = prompt('Укажите страну доставки:');
if (inputValue === null) {
  alert('Вы не указали страну доставки, попробуйте еще раз!');
  console.log('Вы не указали страну доставки, попробуйте еще раз!');
}
inputValue = inputValue.toLowerCase();

console.log('inputValue: ', inputValue);
switch (inputValue) {
  case countryChina.toLowerCase():
    cost = 100;
    alert(`Доставка в ${countryChina} будет стоить ${cost} кредитов`);
    console.log(`Доставка в ${countryChina} будет стоить ${cost} кредитов`);
    break;

  case countryChile.toLowerCase():
    cost = 250;
    alert(`Доставка в ${countryChile} будет стоить ${cost} кредитов`);
    console.log(`Доставка в ${countryChile} будет стоить ${cost} кредитов`);
    break;

  case countryAustralia.toLowerCase():
    cost = 170;
    alert(`Доставка в ${countryAustralia} будет стоить ${cost} кредитов`);
    console.log(`Доставка в ${countryAustralia} будет стоить ${cost} кредитов`);
    break;

  case countryIndia.toLowerCase():
    cost = 80;
    alert(`Доставка в ${countryIndia} будет стоить ${cost} кредитов`);
    console.log(`Доставка в ${countryIndia} будет стоить ${cost} кредитов`);
    break;

  case countryJamaica.toLowerCase():
    cost = 120;
    alert(`Доставка в ${countryJamaica} будет стоить ${cost} кредитов`);
    console.log(`Доставка в ${countryJamaica} будет стоить ${cost} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна.');
    console.log('В вашей стране доставка не доступна.');
}

// const inputValue = country.toLowerCase().includes(inputValue.toLowerCase());
