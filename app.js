let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

let statusLike = document.querySelectorAll(".like");

statusLike.forEach((img) => {
  img.addEventListener("click", function () {
    let imgSrc = img.style.backgroundImage;
    if (imgSrc === 'url("images/like-white.png")') {
      img.style.backgroundImage = 'url("images/like-blue.png")';
    } else {
      img.style.backgroundImage = 'url("images/like-white.png")';
    }
  });
});

let moreDetailsBtn = document.querySelectorAll(".btn-more-details");
let Modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

function openModal() {
  Modal.classList.remove("hide");
  Modal.classList.add("show");
}
function closeModal() {
  Modal.classList.add("hide");
  Modal.classList.remove("show");
}
moreDetailsBtn.forEach((btn) => btn.addEventListener("click", openModal));
btnClose.addEventListener("click", closeModal);

Modal.addEventListener("click", function (e) {
  if (e.target === Modal) {
    closeModal();
  }
});
//slider
$(".slider").slick({ dots: true });

// oop counter
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let inputFields = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();}

    this.decrement = function () {
      this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
      this.toggleButtonState();
    };
    this.toggleButtonState = function () {
      let count = this.domRefs.inputField.value;
      this.domRefs.decrementBtn.disabled = count <= 1;
      this.domRefs.incrementBtn.disabled = count >= 10;
    };

    this.domRefs.incrementBtn.addEventListener(
      "click",
      this.increment.bind(this)
    );
    this.domRefs.decrementBtn.addEventListener(
      "click",
      this.decrement.bind(this)
    );
  };
//let counter1 = new Counter(incrementBtns, decrementBtns, inputFields);
for (let i = 0; i < decrementBtns.length; i++) {
   let counter = new Counter(
    incrementBtns[i],
    decrementBtns[i],
    inputFields[i],
  );
}
