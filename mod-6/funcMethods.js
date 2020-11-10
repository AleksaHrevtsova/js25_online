// import data from "../data/objects.js";
// console.log(data);

// //  ФУНКЦИОНАЛЬНЫЕ МЕТОДЫ МАССИВОВ
// // array.reduce((acc, element, idx, array)=>{}, 0||{}||[]) - что угодно
// const reduceData = data.reduce((acc, elem) => {
//   const tags = elem.tags.split(", ");
//   // console.log(acc)
//   acc.push(...tags);
//   return acc;
// }, []);
// // console.log(reduceData)

// //      .map   (( - , element, idx, array)=>{}) - []
// const mapData = data.map((el) => el.type);
// // console.log(mapData)

// //      .filter(( - , element, idx, array)=>{}) - []
// const filterData1 = data.filter(
//   (lm) => lm.tags.split(", ").includes("moon"),
//   // {
//   //   const condition = lm.tags.split(', ').includes('moon')

//   //   // if (condition){
//   //   //   return lm
//   //   // }
//   //   // return

//   //   return condition ? lm : undefined
//   // }
// );
// // console.log(filterData1)

// function filterArray(arr, value) {
//   return arr.filter((lm) => lm.tags.split(", ").includes(value));
// }
// // console.log(filterArray(data, 'moon'))

// //      .find  (( - , element, idx, array)=>{}) - element
// const findData = data.find((lm) => lm.tags.split(", ").includes("moon"));
// // console.log(findData)

// function findElem(arr, id) {
//   return arr.find((lm) => lm.id === id);
// }
// // console.log(findElem(data, 1859616))

// //     .forEach(( - , element, idx, array)=>{}) - ничего, замена цикла for()
// const myArray = [];

// data.forEach((el, idx) => {
//   // console.log(el)
//   if (el.tags.includes("full moon")) {
//     myArray.push(el);
//   }
// });

// // console.log("myArray", myArray)

// //      .some  (( - , element, idx, array)=>{}) - true, если хотя бы один элемент соответствует условию
// // as ||
// const someElems = data.some((obj) => obj.tags.includes("full moon"));
// // console.log(someElems)

// //      .every (( - , element, idx, array)=>{}) - true, если все соответствуют
// // as &&
// const everyElems = data.every((obj) => obj.tags.includes("full moon"));
// // console.log(everyElems)

// //      .sort  ((a, b)=> a - b) - сортирует от меньшего к большему
// const sortById = data.sort((a, b) => a.id - b.id); // ХОРОШО - Правильно
// // const sortById = data.map(el=>el.id).sort() - ПЛОХО!!!
// // console.log(sortById)

// //      .sort  ((a, b)=> b - a) - от большего к меньшему
// const sortById1 = data.sort((min, max) => max.id - min.id); // ХОРОШО - Правильно
// // console.log(sortById1)

// const arrayId = data
//   .map((el) => el.id)
//   .sort((a, b) => a - b)
//   .reverse();
// // console.log(arrayId)

// //      .sort()                 - в алфавитном порядке
// const sortTags = data.map((el) => el.tags).sort();
// // console.log(sortTags)

// //      .sort().reverse()       - в обратном алфавитному порядку
// const reverseTags = data
//   .map((el) => el.tags)
//   .sort()
//   .reverse();
// // console.log(reverseTags)

// // ex 8

// // const searchFriend = (array, value) => {
// //   return array.filter(({tags})=>{return tags.includes(value)}).map(el=>el.id)
// // }

// const searchFriend = (array, value) =>
//   array.filter(({ tags }) => tags.includes(value)).map((el) => el.id);

// // console.log(searchFriend(data, 'lake'))

// // ex 10
// const uniqueTags = function (arr) {
//   return arr
//     .reduce((acc, elem) => {
//       acc.push(...elem.tags.split(" "));
//       return acc;
//     }, [])
//     .filter((tag, idx, arr) => arr.indexOf(tag) === idx)
//     .sort();
// };

// console.log(uniqueTags(data));

// // 05.11

// const array = [
//   { name: "aaa", age: 5, email: "cdddd" }, // [0]
//   { name: "bbb", age: 15, email: "cdddd" }, // [1]
//   { name: "ccc", age: 25, email: "cdddd" }, // [2]
//   { name: "ddd", age: 35, email: "cdddd" }, // [3]
// ];

// // const getUsersWithAge = (array, min, max) =>
// //   array
// //     .filter((object) => object.age >= min && object.age <= max)
// //     .map(({ name, email }) => ({ name, email }));

// const getUsersWithAge = (array, min, max) =>
//   //          () => {}
//   //           object => {...; ....}
//   //          ( { age } ) => {}
//   array
//     .filter(({ age }) => age >= min && age <= max)
//     .map(({ name, email }) => ({ name, email }));

// // const set= body.children[0].chicdren[1].dataset

// // const { source, action } = set

// const arr = [param1, param2, param3];

// call(object, param1, param2, param3);
// apply(object, arr);
// const user = {
//   name: "Vasya",
// };

// function toSayHello(par1, par2) {
//   console.log(`${this.name}, hello! I am ${par1} to ${par2} you`);
// }
// toSayHello.call(user, "great", "see");
// toSayHello.apply(user, ["glad", "meet"]);

// const myArr = [1, 2, 3, 4, 5, 6];

// // let total = 0;
// const newArr = [];
// // // console.log(total);

// for (let element of myArr) {
//   if (element % 2 === 0) {
//     newArr.push(element);
//   }
//   // return total
// }
// console.log(newArr);

// 1
// console.log(
//   myArr.reduce((total, element) => {
//     if (element % 2 === 0) {
//       total += element;
//     }
//     return total;
//   }, 0),
// );

// // 2
// console.log(
//   myArr.reduce((newArr, element) => {
//     if (element % 2 === 0) {
//       newArr.push(element);
//     }
//     return newArr;
//   }, []),
// );

// console.log(
//   myArr.reduce((newArr, element) => {
//     element % 2 === 0 ? newArr.push(element) : undefined;
//     return newArr;
//   }, []),
// );

// let name = "Aleks";

const myObj = {
  name: "Sandra",
  toShowName() {
    return this.name;
  },
};
// // myObj.toShowName();
// console.log(myObj);
console.log(Object.create(myObj))
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// console.dir(User)
// const myUser = new User()
// // const myNewObj = {
// //   name: "Zaharia",
// // };

// console.log(myObj.toShowName.call(myNewObj));

// const makeShef = function (...name) {
//   //
//   //
//   //
//   //
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef("Mango");
// mango("apple pie");
// mango("beef stew");

// const poly = makeShef("Poly");
// poly("pancakes");
// poly("eggs and bacon");
