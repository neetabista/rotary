const boxes = document.querySelectorAll(".box");

boxes.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    console.log(val.childNodes[9]);
    val.childNodes[9].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[9].style.opacity = 0;
  });

  val.addEventListener("mousemove", (dets) => {
    val.childNodes[9].style.left = dets.x - 80 + "px";
    val.childNodes[9].style.top = dets.y - 80 + "px";
  });
});
