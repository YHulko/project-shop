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
console.log(statusLike);/*-знаходить 6 селекторів-*/

statusLike.forEach((img) => { img.addEventListener("click", 
function () {let imgSrc = img.src; if (imgSrc === "images/like-white.png") {img.src = "images/like-blue.png";} else { img.src = "images/like-white.png";}}

)});
  
   
