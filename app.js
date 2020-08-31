// ЧСЕТЧИК КАРЗИНЫ

let productsCountEl = document.getElementById('products-count');
let addToCartButton = document.querySelectorAll(".button2");

for(i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent +1
    })
}
console.log(addToCartButton);


///////////////////////.................... На один элемент
// addToCartButton.addEventListener("click", function () {
//     addToCartButton.style.backgroundColor = "red"
// })

//................... ......................Второй вариант записи
// addToCartButton.addEventListener("click", function (e) {

//         // e.preventDefault(); 
//         // (отменяет действие, например ссылки)

//     let current = e.target;
//     console.log(current)
//     current.style.backgroundColor = "red"
// })

/////////////////////// На два и больше ВСЕГДА пишем цикл


////////////////////////////////////////////Разбор домашки 

// change like button state


// ЛАЙКИ

let likeButton = document.querySelectorAll(".like")


for(i = 0; i < likeButton.length; i++) {
        likeButton[i].addEventListener("click", function () {
            // if(likeButton[i].classList.contains("liked")) {
            //     likeButton[i].classList.remove("liked")
            // } else {
            //     likeButton[i].classList.add("liked")
            // }
            // likeButton[i].classList.toggle("liked")
            
            this.classList.toggle("liked")
        })
    }

    // modal

    
let moreDetailsButtons = document.querySelectorAll (".button1");
let modal = document.querySelector (".modal");
let closeBtn = document.querySelector (".btn-close");

console.log(moreDetailsButtons);
console.log(modal);
console.log(closeBtn);

// moreDetailsButtons.forEach(function(btn) {
//     btn.addEventListener("click",function() {
//         modal.classList.add("show");
//         modal.classList.remove("hide");
//     })
// })
moreDetailsButtons.forEach(function(btn) {
    btn.addEventListener("click",openModal)
    })

function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})

function showModalByScroll () {
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal()
        removeEventListener("scroll",showModalByScroll)
    }
}
window.addEventListener("scroll",showModalByScroll)

// СЧЕТЧИК КОЛИЧЕСТВА В КАРТОЧКЕ ТОВАРА

let decrememtButtons = document.querySelectorAll('.decrememt-button')[0];
let incrememtButtons = document.querySelectorAll(".incrememt-button")[0];
let productsQuantity = document.querySelectorAll (".quantity-input")[0];

console.log(decrememtButtons)
console.log(incrememtButtons)
console.log(productsQuantity)

let currentCount = productsQuantity.value;

function toggleDecrementState (count) {
    if(count <= 1) {
        decrememtButtons.disabled = true
    } else {
        decrememtButtons.disabled = false
    }
}

 function toggleincrementState (count) {
        if(count >= 5) {
            incrememtButtons.disabled = true
        } else {
            incrememtButtons.disabled = false
        }
    }

toggleDecrementState(currentCount)


incrememtButtons.addEventListener("click", function () {
    let currentCount = +productsQuantity.value;
    let nexCount = currentCount + 1;
    productsQuantity.value = nexCount;

    toggleDecrementState(nexCount)
    toggleincrementState(nexCount)
})
decrememtButtons.addEventListener("click", function () {
    let currentCount = +productsQuantity.value;
    let nexCount = currentCount - 1;
    productsQuantity.value = nexCount;

    toggleDecrementState(nexCount)
    toggleincrementState(nexCount)
})

//////////////////////////////////////////////////////////


//  AOS

AOS.init();

