console.clear();

const bookmarkOutline = document.querySelector('[data-js="card__icon--unactive"]');
const bookmarkFilled = document.querySelector('[data-js="card__icon--active"]');
const bookmarkButton = document.querySelector("card__icon");

bookmarkOutline.addEventListener("click", () => {
    console.log(bookmarkOutline.src)
  if (bookmarkOutline.src.endsWith("_outline.png")) {
    bookmarkOutline.src = "./assets/bookmark_filled.png";
  } else {
    bookmarkOutline.src = "./assets/bookmark_outline.png";
  }
});
