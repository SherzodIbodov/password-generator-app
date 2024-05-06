let slider = document.querySelector("input");
let value = document.querySelector(".value");
let rectagle = document.querySelectorAll(".rectagle");
let checkboxes = document.querySelectorAll(".checkbox");

value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value;
};

checkboxes.forEach((item, index) =>
  item.addEventListener("click", () => {
    rectagle[index].classList.toggle("active");
  })
);
