console.clear();

const form = document.querySelector('[data-js="form-question"]');
const submitBtn = document.querySelector('[data-js="button-submit"]');
const containerCard = document.querySelector('main');

const createQuestion = document.querySelector('[data-js="question-text"]');
const createAnswer = document.querySelector('[data-js="answer-text"]');
const createTags = document.querySelector('[data-js="tags"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const question = data.question;
  const answer = data.answer;
  const tag = data.tags;
  // console.log(question, answer, tag)
  createCard(data);
});

function createCard(cardData) {

  const divCard = document.createElement("div");
  divCard.classList.add("cards");

  const h2El = document.createElement("h2");
  h2El.classList.add("card__question");
  h2El.textContent = cardData.question

  const buttonShowAnswer = document.createElement("button");
  buttonShowAnswer.classList.add("cards__answer--show");
  buttonShowAnswer.textContent = "show answer"

  const divAnswer = document.createElement("div");
  divAnswer.classList.add("card__answered");
  // add style to hide answer
  divAnswer.style.display="none";
  divAnswer.textContent = cardData.answer

  const buttonBookmark = document.createElement("button");
  buttonBookmark.classList.add("bookmark__icon");

  const imgBookmark = document.createElement("img");
  imgBookmark.classList.add("bookmark__icon");
  imgBookmark.src = "assets/bookmark_medium.png";

  const buttonTag = document.createElement("button");
  buttonTag.classList.add("tag__icon");
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






