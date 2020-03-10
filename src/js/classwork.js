'use strict';

console.warn('Class Work');

// // TASK-01:

// кто идет к доске

// const quantutyStudents = 15;
// const isOkay = confirm('start randon choise of students');
// let randomNumber = Math.random() * quantutyStudents;
// randomNumber = Math.round(randomNumber);

// if (isOkay) {
//   alert(`Student number: ${randomNumber}`);
//   console.log(randomNumber);
// } else {
//   alert('Cenceled by user');
// }

// TASK-02:

// Спашивают у пользователя "Вы хотите купить конфеты?", если не хотят предложить
// "Вы хотите купит пива?". Спрашиваем, сколько лет(больше), если не число
// - попробуйте еще, если больше 18-ти продать товар.

// let userInput = confirm('Вы хотите купить конфеты?');
// const USER_AGE = 18;
// let userAge;

// if (userInput) {
//   userAge = prompt('Введите Ваш возраст:');
//   if (Number.isNaN(Number(userAge))) {
//     alert('Попробуйще еще раз!');
//   } else {
//     alert('Вы приобрели конфеты!');
//   }
// } else {
//   userInput = confirm('Вы хотите купить пивo?');
//   if (userInput) {
//     userAge = prompt('Введите Ваш возраст:');
//     if (Number.isNaN(Number(userAge))) {
//       alert('Попробуйще еще раз!');
//     } else {
//       if (Number(userAge) >= USER_AGE) {
//         alert('Вы приобрели пивo!');
//       } else {
//         alert('Вам еще рано!');
//       }
//     }
//   }
// }

// TASK-03:

// Пользователь вводит одно число, потом второе, потом +, -, *, / и
// выводит результат операции;

let OPERETIONS = '+-/*';
let userFirstNumber;
let userSecondNumber;
let userOperetion;
let resalt;

userFirstNumber = prompt('Введите первое число:');
if (Number.isNaN(Number(userFirstNumber))) {
  alert('Вы ввели не число! Попробуйще еще раз!');
  console.log(userFirstNumber);
}

userSecondNumber = prompt('Введите второе число:');
if (Number.isNaN(Number(userSecondNumber))) {
  alert('Вы ввели не число! Попробуйще еще раз!');
  console.log(userSecondNumber);
}

userOperetion = prompt('Введите математичискую операцию: +, -, * или /');

console.log(userFirstNumber);
console.log(userSecondNumber);
console.log(userOperetion);

if (userOperetion.includes('+', '-', '*', '/')) {
  switch (userOperetion) {
    case '+':
      resalt = Number(userFirstNumber) + Number(userSecondNumber);
      console.log(
        `Математичиская операция выполнена: результат сложения ${resalt}`,
      );
      break;

    case '-':
      resalt = Number(userFirstNumber) - Number(userSecondNumber);
      console.log(
        `Математичиская операция выполнена: результат вычитания ${resalt}`,
      );
      break;

    case '*':
      resalt = Number(userFirstNumber) * Number(userSecondNumber);
      console.log(
        `Математичиская операция выполнена: результат умножения ${resalt}`,
      );
      break;

    case '/':
      resalt = Number(userFirstNumber) / Number(userSecondNumber);
      console.log(
        `Математичиская операция выполнена: результат деления ${resalt}`,
      );
      break;
  }
} else {
  alert('OOOOOPS!!! Вы ввели не математический оператор! Попробуйще еще раз!');
}

// use 4 times  do...wile and switch for userOperetion

// // TASK-04 additional for home

// В строке удалить все повторяющиеся символы

// console.log('This is dog'); // This dog
