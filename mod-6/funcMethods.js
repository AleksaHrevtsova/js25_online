import data from '../data/objects.js'
console.log(data)

//  ФУНКЦИОНАЛЬНЫЕ МЕТОДЫ МАССИВОВ
// array.reduce((acc, element, idx, array)=>{}, 0||{}||[]) - что угодно
const reduceData = data.reduce((acc, elem) => {
  const tags = elem.tags.split(', ')
  // console.log(acc)
 acc.push(...tags)
 return acc
}, [])
// console.log(reduceData)

//      .map   (( - , element, idx, array)=>{}) - []
const mapData = data.map((el)=>el.type)
// console.log(mapData)

//      .filter(( - , element, idx, array)=>{}) - []
const filterData1 = data.filter((lm)=> lm.tags.split(', ').includes('moon')
// {
//   const condition = lm.tags.split(', ').includes('moon')

//   // if (condition){
//   //   return lm
//   // }
//   // return

//   return condition ? lm : undefined
// }
)
// console.log(filterData1)

function filterArray(arr, value){
  return arr.filter(lm=> lm.tags.split(', ').includes(value))
}
// console.log(filterArray(data, 'moon'))

//      .find  (( - , element, idx, array)=>{}) - element
const findData = data.find(lm=> lm.tags.split(', ').includes('moon'))
// console.log(findData)

function findElem(arr, id){
  return arr.find(lm=> lm.id === id)
}
// console.log(findElem(data, 1859616))

//     .forEach(( - , element, idx, array)=>{}) - ничего, замена цикла for()
const myArray = []

data.forEach((el)=>{
  // console.log(el)
  if(el.tags.includes('full moon'))
    myArray.push(el)
})

// console.log("myArray", myArray)

//      .some  (( - , element, idx, array)=>{}) - true, если хотя бы один элемент соответствует условию
// as ||
const someElems = data.some((obj)=>obj.tags.includes('full moon'))
// console.log(someElems)

//      .every (( - , element, idx, array)=>{}) - true, если все соответствуют
// as &&
const everyElems = data.every((obj)=>obj.tags.includes('full moon'))
// console.log(everyElems)

//      .sort  ((a, b)=> a - b) - сортирует от меньшего к большему
const sortById = data.sort((a, b)=> a.id - b.id) // ХОРОШО - Правильно
// const sortById = data.map(el=>el.id).sort() - ПЛОХО!!!
// console.log(sortById)

//      .sort  ((a, b)=> b - a) - от большего к меньшему
const sortById1 = data.sort((min, max)=> max.id - min.id) // ХОРОШО - Правильно
// console.log(sortById1)

const arrayId = data.map(el=>el.id).sort((a, b) => a - b).reverse()
// console.log(arrayId)

//      .sort()                 - в алфавитном порядке
const sortTags = data.map(el=>el.tags).sort()
// console.log(sortTags)

//      .sort().reverse()       - в обратном алфавитному порядку
const reverseTags = data.map(el=>el.tags).sort().reverse()
// console.log(reverseTags)



