let scrollLeftBtn = document.querySelector('#scroll-left');
let scrollRightBtn = document.querySelector('#scroll-right');
let scrollContainer = document.querySelector(".scroll-container");
let scrollContent = document.querySelector('.scroll-content');

let scrollAmount = 0;

let scrollMax = (scrollContent.scrollWidth+50) - scrollContainer.clientWidth;
console.log(scrollMax)
scrollLeftBtn.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= 200;
    scrollAmount = Math.max(scrollAmount, 0);
    scrollContent.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

scrollRightBtn.addEventListener('click', () => {
  if (scrollAmount <scrollMax) {
    scrollAmount +=200;
    scrollAmount = Math.min(scrollAmount, scrollMax);
    console.log(scrollAmount)
    scrollContent.style.transform = `translateX(-${scrollAmount}px)`;
   
  }
});
