// 1 - CAPTURE PHASE
// console.log(window);
// window.alert("Hello");
// 2
// console.dir(document);
// 3
// html
// 4
// body
// 5
// ul
// 6
// li

// 7 & 1 TARGET PHASE & 1 BUBLING
// target -button

const body = document.querySelector("body");
const list = document.querySelector("ul");
list.style.border = "2px solid green";
list.style.padding = "50px";

const input = document.querySelector('[type="text"]');

input.addEventListener('input', ()=>{
  console.log("input event: ", input.value)
})

input.addEventListener('blur', ()=>{
  console.log("blur event")
})

input.addEventListener('change', ()=>{
  console.log("change event: ", input.value)
})


list.addEventListener("click", (event) => {
  // console.log(event);
  // console.log(event.target);
  // console.dir(event.target);
  // console.dir(event.target.textContent);
  onClick(event);
  console.log("current target: ", event.currentTarget);
  console.log("target: ", event.target);
});

function onClick(e) {
  const addBtn = document.querySelector('[data-z="z"]');
  const action = e.target.dataset.action;
  const z = e.target.dataset.z;
  if (z === "z") {
    // console.log(`click btn ADD`);
    // e.target.style.background = "red";
    e.target.classList.toggle("red");
    list.classList.add("borderStyle");
  }
  if (action === "remove") {
    // console.log(`click btn REMOVE`);
    list.classList.remove("borderStyle");
  }
}
