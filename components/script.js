// Card Component

const closeBtn = document.querySelector(".fa-times");
const closableCard = document.getElementById("closableCard");
const showBtn = document.getElementById("showBtn");

closeBtn.addEventListener('click', () => {
    closableCard.classList.add("hide");
    showBtn.classList.remove("hide");
})
showBtn.addEventListener('click', () => {
    closableCard.classList.remove("hide");
    showBtn.classList.add("hide");
})

