const form = document.querySelector('[action="mailto:hrevtsova@yahoo.com"]');
const formtitle = document.querySelector(".form-title");

const userName = document.querySelector('[name="userName"]');
const userPhone = document.querySelector('[name="userPhone"]');
const userMsg = document.querySelector('[name="message"]');
const sbtBtn = document.querySelector('[type="submit"]');
// console.log(form, formtitle, userName, userPhone, userMsg, sbtBtn);

// СОБЫТИЕ КЛИКА МЫШЬЮ
// mousedown
// mouseup
// 1. click
sbtBtn.addEventListener("click", handlerFunc);

function handlerFunc() {
  console.log(`СОБЫТИЕ click ПРОИЗОШЛО`);
}
// СОБЫТИЯ ПРИ НАЖАТИИ НА КЛАВИШУ

// 2. keydown
// keypress - только для символьных клавиш, т.е. не для: Ctrl, Shift, Alt, etc.
// keyup

userMsg.addEventListener("keydown", (event) => {
  console.log(event);
  console.log(event.type); // keydown
  console.log(event.target); // textarea#message
  newHandlerFunc();
});
function newHandlerFunc() {
  console.log(`СОБЫТИЕ clikeydownck ПРОИЗОШЛО`);
}

userMsg.addEventListener("keypress", () => {
  console.log(`СОБЫТИЕ keypress ПРОИЗОШЛО`);
});

userMsg.addEventListener("keyup", () => {
  console.log(`СОБЫТИЕ keyup ПРОИЗОШЛО`);
});

// СОБЫТИЯ ФОКУСИРОВКИ при клике, переходе табом или сенсором
// 3. focus - фокусировка, может быть только на одном элементе в момент времени
// document.activeElement

userName.addEventListener("focus", () => {
  userName.classList.add("onFocus");
  userName.classList.remove("onBlur");
});

// 4. blur - потеря фокуса
userName.addEventListener("blur", () => {
  // userName.classList.add("onBlur");
  // userName.classList.remove("onFocus");
  userName.classList.toggle("onBlur");
});

// СОБЫТИЕ ВВОДА ДАННЫХ
// 5. input - ввод каждого символа отдельно - БОЛТЛИВОЕ СОБЫТИЕ!!!
userName.addEventListener("input", () => {
  // console.log(`СОБЫТИЕ input ПРОИЗОШЛО`);
});

// 6. change - конец ввода данных:
// - при потере фокуса для <input type="text"> или <textarea>
// - сразу при выборе значения для <select>, <input type="checkbox"> или <input type="ratio">
// userName.addEventListener("change", () => {
// console.log(`СОБЫТИЕ change ПРОИЗОШЛО`);
// });

// СОБЫТИЕ ОТПРАВКИ ФОРМЫ
// 7. submit (если нажать на <input typr="submit"> или Enter)
form.style.border = "2px solid red";

form.addEventListener("submit", a);
function a(e) {
  console.log(e.target);
  console.log(`ФОРМА ОТПРАВЛЕНА`);
}
// form.addEventListener("input", (e) => {
//   console.log(e);
//   console.dir(e.target);
//   console.log(e.target.value);
// });

// СОБЫТИЯ БРАУЗЕРА

// // 8. DOMContentLoaded — браузер полностью загрузил HTML и построил DOM-дерево.
// window.addEventListener("DOMContentLoaded", () => {
//   alert(`СОБЫТИЕ DOMContentLoaded ПРОИЗОШЛО`);
// });

// // load — браузер загрузил все ресурсы.
// window.addEventListener("load", () => {
//   alert(`СОБЫТИЕ load ПРОИЗОШЛО`);
// });
// // beforeunload и unload — уход со страницы.
// window.addEventListener("beforeunload", () => {
//   alert(`СОБЫТИЕ beforeunload ПРОИЗОШЛО`);
// });
// window.addEventListener("unload", () => {
//   alert(`СОБЫТИЕ unload ПРОИЗОШЛО`);
// });

// СЛУШАТЕЛЬ СОБЫТИЙ - современный способ

// element.addEventListener("event_name", handler_func)

// addEventListener & this
// element.addEventListener   this --> element need !!bind!!

// element.removeEventListener("event_name", handler_func)

// ОБЪЕКТ СОБЫТИЯ e || event

// ВАЖНЫЕ СВОЙСТВА ОБЪЕКТА СОБЫТИЯ

// e.type - тип события
// e.target - где произошлосамо событие
// e.currentTarget - где висит сам слушатель

// ДЕФОЛТНЫЕ ДЕЙСТВИЯ БРАУЗЕРА

// переход по ссылке, отправка формы - они нам не нужны!!!

// отмена таких действий - e.preventDefault()

// ====================================
// function tailAndHead(arr) {
//   //coding here...
//   let newArr = [].concat(arr.map((number) => number.toString()));
//   let result = [];

//   for (let i = 0; i < newArr.length - 1; i += 1) {
//     result = result.concat(
//       +newArr[i][newArr[i].length - 1] + +newArr[i + 1][0],
//     );
//   }
//   return result.reduce((sum, el) => (sum = sum * el));
// }
// console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78])); //, 532350
// console.log(tailAndHead([1, 2, 3, 4, 5])); //, 945.
// ====================================
