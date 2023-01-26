const answer = document.querySelector('[data-js="answer"]');
const btnShowAnswer = document.querySelector('[data-js="show-answer"]');

// answer.addEventListener('load',() =>  {
//     let remove = document.getElementsByName("answer");
// });

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

