'use strict';
// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы
// ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
// записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const inputValue = prompt('Enter admin password:');
if (inputValue === null) {
  message = alert('Отменено пользователем!');
} else if (inputValue === ADMIN_PASSWORD) {
  message = alert('Добро пожаловать!');
} else message = alert('Доступ запрещен, неверный пароль!');

// const inputValue = prompt('Enter admin password:');
// {
//   message = alert('Отменено пользователем!');
// }
// {
//   inputValue === ADMIN_PASSWORD
//     ? (message = alert('Добро пожаловать!'))
//     : (message = alert('Доступ запрещен, неверный пароль!'));
// }
