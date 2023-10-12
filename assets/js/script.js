const boxes = document.querySelectorAll(".box");

boxes.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    val.childNodes[9].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[9].style.opacity = 0;
  });

  val.addEventListener("mousemove", (dets) => {
    val.childNodes[9].style.left = dets.x - 80 + "px";
    val.childNodes[9].style.top = dets.y - 70 + "px";
  });
});

const typeNameDiv = document.querySelector(".type-name");
const checkBoxes = document.querySelectorAll(".checkbox");
const checkIcon = document.querySelectorAll("#check");

checkBoxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
    checkIcon[index].classList.toggle("active");
  });
});
