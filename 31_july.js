// https://learn.javascript.ru/intro
// https://translated.turbopages.org/proxy_u/en-ru.ru.da424c94-62dd1aa1-21b4c8d1-74722d776562/https/softwareengineering.stackexchange.com/questions/138521/is-javascript-interpreted-by-design
// https://learn.javascript.ru/manuals-specifications  Спецификация
// https://learn.javascript.ru/first-steps
// Преобрезование типов
// https://learn.javascript.ru/type-conversions
// https://habr.com/ru/company/ruvds/blog/347866/
// https://developer.mozilla.org/ru/docs/Glossary/Type_coercion
// https://medium.com/@sergeybulavyk/преобразование-типов-в-javascript-35a15ddfc333
// Строгое и нестрогое сравнение
// https://yandex.ru/search/?text=%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%BE%D0%B5+%D0%B8+%D0%BD%D0%B5%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%BE%D0%B5+%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5+js&clid=2227913&win=529&lr=213
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness
// falsy значения
// https://developer.mozilla.org/ru/docs/Glossary/Falsy

// Верните список без falsy значений

// falsy
// 0
// false
// undefined
// null
// NaN
// -0

const array = [];

array.push(1);

// console.log(array) // [1]

const deleteFalsy = (list) => {
  let listTrue = [];
  for (let i = 0; i < list.length; ++i) {
    if (list[i]) {
      listTrue.push(list[i]);
    }
  }
  return listTrue;
};
console.log(deleteFalsy([false, true, undefined, null, 0, "", 2, 4]));

// const isDuplicate2 = (list) => {
//   // const number = {list: []}
//   for (let i = 0; i < list.length; ++i) {
//     if (Number(list[i]) === Number(list[i + 1])) {
//       return true;
//     }
//   }
//   return false;
// };

// --- Домашка на следующее воскресенье
// https://leetcode.com/problems/binary-search/

/*Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.*/

let arr = [-1, 0, 3, 5, 9, 12]

var search = function(nums, target) {
    let beg = 0;                                        // определим начало под индексом 0
    let fin = nums.length - 1;                          // определяем конец 
    let mid;                                            // условный центр 

    while (beg <= fin) {                                // используем цикл while пока начало меньше или равно концу массива
        mid = Math.round((fin - beg) / 2) + beg;        // центр равен целому числу и расчитан по формуле конец и минус начело / 2 и переопределить начало

        if (target === nums[mid]) {                      // если искомое число равно среднему, то возвращаем его
            return mid;
        }        
        else if (target < nums[mid]) {                  // если искомое в первое половине, то
            fin = mid - 1;                              // откидываем правую половину
        }
        else {
            beg = mid + 1;                              // если искомое в правой половине, то меняем начало на середину
        }    
    }
    return -1;                                          // если искомого в массиве нет, возвращаем -1
};

console.log(search(array, 9));

// Написать функцию, которая принимает два числа и возращает результат их умножения

function multiplication(a, b) {
  return a * b;
};

/*Написать функцию, которой передаем, имя, фамилия и возраст, 
и получаем строку "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)*/

const person = {
  firstName: 'Иван',
  lastname: 'Петров',
  age: '17 лет',

  function hello(firstName, lastName, age) {
    return `'Привет ${firstName} ${lastName} с возрастом ${age}'`
  }
  console.log(hello);
}

/*Написать функцию, которая принимает пол человека ('M','F') в виде строки, 
результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"*/

function whatSex(sex) {
  if (sex === 'F') {
    return 'Ваш пол женский';
  } else if (sex === 'M') {
    return 'Ваш пол мужской';
  }
  return 'Ваш пол не определен';
}
document.write(whatSex(M));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

let day = function(day) {
  switch (day) {                             // используем конструкцию switch case, она заменяет несколько if
      case 1: return "понедельник";
      case 2: return "вторник";
      case 3: return "cpедa";
      case 4: return "четвеpг";
      case 5: return "пятница";
      case 6: return "cyббота";
      case 7: return "воскресенье";
      default: alert("Введите число от 1 до 7");
        break;
  }
}
document.write(day(7));

/* Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), 
верните каждое первое слово в каждом предложении, через запятую.*/



/* Написать функцию, которой передаем имя, 
и она возраващает приветствие в зависимости от времени суток 
(Доброе утро\день\вечер\ночи Иван)*/

const greet = function(name) {
  let day = new Date();
  let hour = day.getHours();

  if (hour >= 6 && hour < 12) {             // пишем условие испоьзуя шаблонный литералл и логический оператор И 
    return `${name} 'Доброе утро'`;
  } else if (hour >= 12 && hour < 18) {
    return `${name} 'Добрый день'`;
  } else if (hour >= 18 && hour < 24) {
    return `${name} 'Добрый вечер'`;
  } else if (hour >= 0 && hour < 6) {
    return `${name} 'Доброй ночи'`;
  }
}

document.write(name(Иван));

/* Вывести числа от 1 до 100 в столбец. 
К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). 
Например. 33 - зрелый */



/* Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение 
(Иван имеет возраст 44 и он зрелый). 
А также вызови внутри своей функции, функцию из прошлого задания */



/* Сделай функцию, которая принимает массив любых целых чисел, 
которая возращает истинну, если все элементы четные, 
если бы хотя бы один элемент не четный, то false. */



/* Сделай функцию, которая принимает массив любых целых чисел, 
которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.*/



/* Сделай функцию, которая принимает массив любых целых чисел, 
которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])*/



/* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] 
и функция возращает среднее арифметическое, (округлить результат до десятых)*/



/* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], 
и переносит первый элемент массива в конец 
(например можно засунуть первый элемент в конец, затем удалить первый элемент), 
попробуй несколькими способами сделать, если догадаешься*/



/* Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст 
([{name: 'Иван', age: 23},...]) и возвращает массим, 
где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".*/



// Преобрезование типов
// https://learn.javascript.ru/type-conversions
// https://habr.com/ru/company/ruvds/blog/347866/
// https://developer.mozilla.org/ru/docs/Glossary/Type_coercion
// https://medium.com/@sergeybulavyk/преобразование-типов-в-javascript-35a15ddfc333
// Строгое и нестрогое сравнение
// https://yandex.ru/search/?text=%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%BE%D0%B5+%D0%B8+%D0%BD%D0%B5%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%BE%D0%B5+%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5+js&clid=2227913&win=529&lr=213
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness
// falsy значения
// https://developer.mozilla.org/ru/docs/Glossary/Falsy
//  Дополнительно!!!
// https://youtu.be/nEabP9CYCAQ


/*Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.