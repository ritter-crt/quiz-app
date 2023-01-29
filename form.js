console.clear();

const form = document.querySelector('[data-js="form"]');
const submitBtn = document.querySelector('[data-js="form__button--submit"]');
const containerCard = document.querySelector('[data-js="card__container"]');

const createQuestion = document.querySelector('[data-js="form__question--text"]');
const createAnswer = document.querySelector('[data-js="form__answer--text"]');
const createTags = document.querySelector('[data-js="form__tag"]');


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const question = data.question;
  const answer = data.answer;
  const tag = data.tags;
  // console.log(question, answer, tag)
  createCard(data);
  form.reset();
  form.elements.question.focus();
  amountLeftAnswer.textContent= maxLength;
  amountLeftQuestion.textContent= maxLength
});

function createCard(cardData) {

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const h2El = document.createElement("h2");
  h2El.classList.add("card__tile");
  h2El.textContent = cardData.question

  const buttonShowAnswer = document.createElement("button");
  buttonShowAnswer.classList.add("card__button--show");
  buttonShowAnswer.textContent = "show answer"

  const divAnswer = document.createElement("div");
  divAnswer.classList.add("card__answer--hide");
  // add style to hide answer
  // divAnswer.style.display="none";
  divAnswer.textContent = cardData.answer

  const buttonBookmark = document.createElement("button");
  buttonBookmark.classList.add("card__bookmark__icon");

  const imgBookmark = document.createElement("img");
  imgBookmark.classList.add("card__bookmark_icon--unactive");
  imgBookmark.src = "assets/bookmark_outline.png";
  imgBookmark.setAttribute('width', 40);

  const buttonTag = document.createElement("button");
  buttonTag.classList.add("card__tag");
  buttonTag.textContent = cardData.tag


  divCard.append(h2El, buttonShowAnswer, divAnswer, buttonBookmark, imgBookmark, buttonTag,); 
 
  containerCard.append(divCard);

}

// const questionElement = document.querySelector('[data-js="question-text"]');
const amountLeftQuestion = document.querySelector('[data-js="amountLeftQuestion"]');

// const answerElement = document.querySelector('[data-js="answer-text"]')
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');

const maxLength = createQuestion.getAttribute("maxlength");

const updateAmountLeft = (value) => {
    amountLeftQuestion.innerText = value;
};

const updateAmountLeftTwo = (value) => {
    amountLeftAnswer.innerText = value;
  };
  

updateAmountLeft(maxLength);

updateAmountLeftTwo(maxLength);

createQuestion.addEventListener("input", () => {
  updateAmountLeft(maxLength - createQuestion.value.length);
});

createAnswer.addEventListener("input", () => {
    updateAmountLeftTwo(maxLength - createAnswer.value.length);
  });







