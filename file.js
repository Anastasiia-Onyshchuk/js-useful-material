
// Return
function checkAge(age) {
  if (age>=18) { 
    return "You are an adult";
  } 
  return "You are a minor";
}

// Check password. Early return
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}

// Check storage. Early return
function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  } 
  if (ordered > available) {
   return "Your order is too large, not enough goods in stock!";
  } 
   return "The order is accepted, our manager will contact you";
}

// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.
const fruits = ["apple", "plum", "pear", "orange"];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);


// Last item index and value
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];


// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.
function getExtremeElements(array) {
return [array[0], array[array.length -1]];
}

// Delimiter
// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.
function splitMessage(message, delimiter) {
  let words;
words = message.split(delimiter);
  return words;
}

// Engraving. Price per word
function calculateEngravingPrice(message, pricePerWord) {
const words = message.split(" ");
const wordsCount = words.length;
const totalPrice = wordsCount * pricePerWord;
}

// Join (delimiter)
function makeStringFromArray(array, delimiter) {
  let string;
string = array.join(delimiter);
  return string;
}

//  Slug
function slugify(title) {
  // Change code below this line
let slug;
slug = title.split(' ')
    .join('-')
    .toLowerCase();
return slug;
  // Change code above this line
}

// Slice
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2) ;
// const nonExtremeEls = fruits.slice(1, fruits.length-1) ;
// const lastThreeEls = fruits.slice(-3) ;

// Concat
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];
const allClients = oldClients.concat(newClients); 

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.
function makeArray(firstArray, secondArray, maxLength) {
const thirdArray = firstArray.concat(secondArray);
  if (thirdArray.length > maxLength){
    return thirdArray.slice(0, maxLength);
  }
return thirdArray;
}
  
// Простоий цикл
const start = 3;
const end = 7;
for (let i = start; i <= end; i +=1) { // Change this line
  console.log(i);
}

// цикл for
function calculateTotal(number) {
let sum = 0;
for (let i = 1; i <= number; i += 1)
{
  sum += i;
}
  return sum;
}

// Цикл for 2
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i +=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// складний цикл for
function calculateTotalPrice(order) {
  let total = 0;
for (i = 0; i < order.length; i ++){
  total += order[i];
}
  return total;
}

// Find longest word
function findLongestWord(string) {
  const stringWord = string.split(" ");
let longestWord = stringWord[0];
for (let i = 1; i < stringWord.length; i += 1){
if(longestWord.length < stringWord[i].length){
    longestWord = stringWord[i];

}

}
      return longestWord;
}

// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (i = min; i >= min && i<= max; i++)
  numbers.push(i)
  // Change code above this line
  return numbers;
}

// Array + NewArray with push, cycle for + if 
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).
function filterArray(numbers, value) {
const finalNumbers = [];
  for( let i=0; i < numbers.length; i+=1 ){
   if (numbers[i]>value){
     finalNumbers.push(numbers[i]); 
   }
  }
     return finalNumbers

}

// Includes
// Метод includes(value) перевіряє, чи присутній в масиві елемент зі значенням value, і повертає true або false відповідно. Сфера застосування цього методу зводиться до ситуацій, коли необхідно перевірити, чи присутній елемент в масиві, і не важлива його позиція (індекс).
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); 
}

// Common in two arrays. Includes, push
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
function getCommonElements(array1, array2) {
const commonElements =[]
  
  for (let i = 0; i < array1.length; i += 1){
    if (array2.includes(array1[i])){
      commonElements.push(array1[i]);
    }

  }
        return commonElements;
}

// For of
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (const item of order){
  total += item;
}
  // Change code above this line
  return total;
}

// 
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];
for (let num of numbers){
  const number = num;
 if( num > value){
    filteredNumbers.push(number);
 } 

  }
  console.log(filteredNumbers);
  return filteredNumbers;
  // Change code above this line
}

// Остача
Значення змінної a - це число 0
Значення змінної b - це число 1
const a = 3 % 3;
const b = 4 % 3;

// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
function getEvenNumbers(start, end) {
   // Change code below this line
let Array = [];
for (let i = start; i <= end; i+=1){

  if (i % 2 === 0){
    Array.push(i);
  }
  
}
    return Array;
    // Change code above this line
}
  
//  Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break
  }
}


// рефакторинг
function findNumber(start, end, divisor) {
  // Change code below this line

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

}


// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення)

function includes(array, value) {

for (let i = 0; i < array.length; i += 1){
  if(array[i] === value){
return true;
  }
}
  return false;

}
