// Что такое DOM - Document Object Model
// представление тэгов из html в объекты javascript

// Что мы можем с этим делать?
// GET CREATE UPDATE DELETE

// итак GET - получаем доступык элементам:
// object
// .querySelector()
// .getElementById()

// collection
// .querySelectorAll()
// .getElementsByClassName()


// CREATE - создаем новые элементы с нуля или конируем

// .createElement(tag)
// `<div></div>`

// .cloneNode(true)
// .cloneNode(false)


// UPDATE - изменяем существующие элементы

// .textContent
// .style
// .classList

// .hasAttribute(name)
// .getAttribute(name)
// .setAttribute(name, value)
// .removeAttribute(name)
// .attributes

// DELETE - удаляем элементы
// .removeChild(elem)
// .remove()

// Встраивание элементов в html
// objects

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

// вот полегче)
// .insertAdjacentHTML(position, ``)
//                     beforeend
//                     afterend
//                     afterbegin
//                     beforebegin