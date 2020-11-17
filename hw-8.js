import galleryItems from "./gallery-items.js";
const list = document.querySelector(".js-gallery");
const div = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");
const btn = document.querySelector(".lightbox__button");
const modal = document.querySelector(".lightbox__overlay");

galleryItems.map((item, i) => {
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.setAttribute("data-source", item.original);
  img.alt = item.description;
  img.setAttribute("data-index", i);

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  link.append(img);

  const li = document.createElement("li");
  li.classList.add("gallery__item");

  li.append(link);

  list.append(li);
});

list.addEventListener("click", (e) => {
  e.preventDefault();
  let modalLink = e.target.dataset.source;
  div.classList.add("is-open");
  modalImg.src = modalLink;
  modalImg.dataset.ind = 0;
});

btn.addEventListener("click", () => {
  div.classList.remove("is-open");
  modalImg.src = "";
});

modal.addEventListener("click", () => {
  div.classList.remove("is-open");
  modalImg.src = "";
});
window.addEventListener("keyup", (event) => {
  if (event.code === "Escape") {
    div.classList.remove("is-open");
    modalImg.src = "";
  }
});
window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowLeft") {
    pressLeft();
  }
});
window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight") {
    pressRight();
  }
});
function setModalImageAttribute(step, index) {
  modalImg.src = galleryItems[index + step].original;
  modalImg.alt = galleryItems[index + step].description;
  modalImg.dataset.ind = `${index + step}`;
}
function pressRight() {
  const index = +modalImg.dataset.ind;
  // console.log(index);
  if (index === galleryItems.length - 1) return;
  setModalImageAttribute(1, index);
}
function pressLeft() {
  const index = +modalImg.dataset.ind;
  // console.log(index);
  if (index === 0) return;
  setModalImageAttribute(-1, index);
}