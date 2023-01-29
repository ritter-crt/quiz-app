
console.clear();

const bookmarkOutline = document.querySelector('[data-js="bookmark--unactive"]');
const bookmarkFilled = document.querySelector('[data-js="bookmark--active"]');
const bookmarkButton = document.querySelector("card__icon");

bookmarkOutline.addEventListener("click", () => {
    console.log(bookmarkOutline.src)
  if (bookmarkOutline.src.endsWith("_outline.png")) {
    bookmarkOutline.src = "./assets/bookmark_filled.png";
  } else {
    bookmarkOutline.src = "./assets/bookmark_outline.png";
  }
});


const answer = document.querySelector('[data-js="answer--hidden"]');
const btnShowAnswer = document.querySelector('[data-js="button--show"]');

btnShowAnswer.addEventListener("click", () => {
  answer.classList.toggle("hidden");
 
});

btnShowAnswer.addEventListener("click", () => {
  const toggleAnswer = () => {
    const isHidden = answer.style.display === "none";
    if (isHidden) {
      answer.style.display = "block";
    } else {
      // Hide element
      answer.style.display = "none";
      btnShowAnswer.textContent = "show answer";
    }
  };
  answer.classList.add("hidden");
  if (btnShowAnswer) {
    answer.classList.remove("hidden");
    btnShowAnswer.textContent = "hide answer";
  }
  toggleAnswer();
});


