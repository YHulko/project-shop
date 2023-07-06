let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
console.log(productsCountEl);
console.log(addToCartBtns);

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

let statusLike = document.querySelectorAll(".like");
console.log(statusLike); /*-знаходить 6 селекторів-*/

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
