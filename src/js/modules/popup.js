const openPopUp = document.getElementById("open-popup");
const closePoUp = document.getElementById("close-popup");
const popUp = document.getElementById("popup");

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
})

closePoUp.addEventListener("click", () => {
  popUp.classList.remove("active");
})
