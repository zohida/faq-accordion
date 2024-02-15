document.addEventListener("DOMContentLoaded", () => {
  const cardList = document.querySelector(".cards__list");
  const btns = document.querySelectorAll(".plus-btn");
  const btnsMinus = document.querySelectorAll(".minus-btn");
  const cardsText = document.querySelectorAll(".cards-hidden__wrapper");

  btns.forEach((item, idx) => {
    item.addEventListener("click", () => {
      item.classList.add("hidden");
      btnsMinus.forEach((element, id) => {
        if (id === idx) {
          element.classList.remove("hidden");
        }
      });
      cardsText.forEach((item, index) => {
        if (index === idx) {
          item.classList.remove("hidden");
        }
      });
    });
  });

  btnsMinus.forEach((item, idx) => {
    item.addEventListener("click", () => {
      item.classList.add("hidden");
      btns.forEach((element, id) => {
        if (id === idx) {
          element.classList.remove("hidden");
        }
      });
      cardsText.forEach((item, index) => {
        if (index === idx) {
          item.classList.add("hidden");
        }
      });
    });
  });
});
