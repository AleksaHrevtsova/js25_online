// ПРОПИСЫВАЕМ ВСЕ ДОСТУПЫ К ЭЛЕМЕНТАМ
const mainTitle = document.getElementById("mainTitle");
const titleWrapper = document.getElementById("titleWrapper");
// Что такое DOM - Document Object Model
// представление тэгов из html в объекты javascript

// Что мы можем с этим делать?
// GET CREATE UPDATE DELETE

// итак GET - получаем доступык элементам:
// object
// const myImage = document.querySelector("img");
// const myImage = document.querySelector(".myLogo");
// const myImage = document.querySelector("#myId");
// const myImage = document.querySelector("[data-source='my data attribute']");
// const myImage = document.getElementById('myId')

// console.log(myImage);
// console.dir(myImage);
// console.log(myImage.alt);
// console.log(myImage.attributes);
// console.log(myImage.classList);
// console.log(myImage.dataset);
// console.log(myImage.id);
// console.log(myImage.tagName);
// console.log(myImage.style); // использовать в крайнем случае

// collection
const navList1 = document.querySelectorAll(".navList li");
// const navList2 = document.getElementsByClassName('navList-item')
console.dir(navList1)
// console.dir(navList2)
navList1.forEach((elem)=>{
console.log(elem.textContent)
})
// CREATE - создаем новые элементы с нуля или конируем
// .createElement(tag)
const myNewImg = document.createElement("img");
// console.log(myNewImg);
// console.dir(myNewImg);

// `<div></div>`
const myBtn = `<button id="myBtn">click</button>`;
// console.log(myBtn);
// console.dir(myBtn); // это не объект!!!

// .cloneNode(true)
const cloneNavList1 = navList1[0].cloneNode(true);
// console.log(cloneNavList1);
// .cloneNode(false)
const cloneNavList2 = navList1[0].cloneNode(false);
// console.log(cloneNavList2);

// UPDATE - изменяем существующие элементы

// .textContent
mainTitle.textContent = "The Best BarberShop";
// .style
myNewImg.style.border = "10px solid red";
// .classList
mainTitle.classList.add("main-title", "fff");
mainTitle.classList.add("title");
mainTitle.classList.remove("main-title");
// console.log(mainTitle);
// .getAttribute(name)

// 1
// myNewImg.src = 'https://top-barbershop.com/media/2016/08/6yvceB8zbYg.jpg'
// myNewImg.width = "300";

// 2
// .setAttribute(name, value)
myNewImg.setAttribute(
  "src",
  "https://top-barbershop.com/media/2016/08/6yvceB8zbYg.jpg",
);
myNewImg.setAttribute("width", "300");
// .removeAttribute(name)
// .attributes

// Встраивание элементов в html
// objects
mainTitle.after(myNewImg);
// .insertBefore(elem, nextSibling)
// .appendChild(elem)

// .append(elem1, elem2, ...)
// .prepend(elem1, elem2, ...)
// .after(elem1, elem2, ...)
// .before(elem1, elem2, ...)
// .replaceWith(elem1, elem2, ...)

// .insertAdjacentElement(position, ``)
//                     beforeend
//                     afterend
//                     afterbegin
//                     beforebegin

// `<div></div>`
// .innerHTML - тяжелый для браузера
// mainTitle.innerHTML += myBtn
// mainTitle.innerHTML = '' // для сноса контента

// вот полегче)
// .insertAdjacentHTML(position, ``)
//                     beforeend
//                     afterend
//                     afterbegin
//                     beforebegin
mainTitle.insertAdjacentHTML("afterend", myBtn);
// mainTitle.insertAdjacentHTML('beforebegin', myBtn)

// mainTitle.insertAdjacentHTML('afterbegin', myBtn)
// mainTitle.insertAdjacentHTML('beforeend', myBtn)

// DELETE - удаляем элементы
// .removeChild(elem)
titleWrapper.removeChild(myNewImg);
// .remove()
// myNewImg.remove();