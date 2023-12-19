//Select modal-btn, modal-overlay, close-btn

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

//Listen for click events on modal-btn and close-btn

modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal")
})

closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal")

})

//When user clicks modal-btn add .OPEN MODEL to model-overlay
//When user clicks close-btn remove .OPEN-MODEL from moderl-overlay