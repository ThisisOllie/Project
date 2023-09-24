// document.addEventListener('DOMContentloaded', doFirst)

// function doFirst(){
//     giftCardButton = document.getElementById('giftCardButton')
//     promotionButton = document.getElementById('promotionButton')

//     giftCardPage = document.getElementById('giftCardPage')
//     promotionPage = document.getElementById('promotionPage')

//     giftCardButton.addEventListener('click', () => {
//         giftCardButton.classList.add('active')
//         promotionButton.classList.remove('active')

//         giftCardPage.style.display = 'block'
//         promotionPage.style.display = 'none'
//     })

//     promotionButton.addEventListener('click', () => {
//         promotionButton.classList.add('active')
//         giftCardButton.classList.remove('active')

//         giftCardPage.style.display = 'none'
//         promotionPage.style.display = 'block'
//     })
// }

// 以下寫法會過

document.addEventListener("DOMContentLoaded", function () {
  const giftCardButton = document.getElementById("giftCardButton");
  const promotionButton = document.getElementById("promotionButton");
  const giftCardPage = document.getElementById("giftCardPage");
  const promotionPage = document.getElementById("promotionPage");

  // Add event listeners to the buttons
  giftCardButton.addEventListener("click", () => {
    giftCardButton.classList.add("active");
    promotionButton.classList.remove("active");
    giftCardPage.style.display = "block";
    promotionPage.style.display = "none";
  });

  promotionButton.addEventListener("click", () => {
    promotionButton.classList.add("active");
    giftCardButton.classList.remove("active");
    promotionPage.style.display = "block";
    giftCardPage.style.display = "none";
  });
});

// Carousell
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

showSlide(currentIndex); // Show the initial slide
