//  ФУНКЦИОНАЛЬНЫЕ МЕТОДЫ МАССИВОВ
// array.reduce((acc, element, idx, array)=>{}, 0||{}||[]) - что угодно

//      .map   (( - , element, idx, array)=>{}) - []

//      .filter(( - , element, idx, array)=>{}) - []
//      .find  (( - , element, idx, array)=>{}) - element

//     .forEach(( - , element, idx, array)=>{}) - ничего, замена цикла for()

//      .some  (( - , element, idx, array)=>{}) - true, если хотя бы один элемент соответствует условию
//      .every (( - , element, idx, array)=>{}) - true, если все соответствуют

//      .sort  ((a, b)=> a - b) - сортирует от меньшего к большему
//      .sort  ((a, b)=> b - a) - от большего к меньшему
//      .sort()                 - в алфавитном порядке
//      .sort().reverse()       - в обратном алфавитному порядку
import data from '../data/objects.js'
console.log(data)

console.log(data.map(el=>{
 return el.id
}))