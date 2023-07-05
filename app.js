let productsCountsEl = document.getElementById("recycle");
let addToCartBtns = document.querySelector(".btn-add-to-cart");
console.log(productsCountsEl);
console.log(addToCartBtns);

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    productsCountsEl.textContent = +productsCountsEl.textContent + 1;
  })
);
