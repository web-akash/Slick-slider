let sliders = document.querySelectorAll(".slider");
let sliderArr = Array.from(sliders);
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
console.log(sliderArr);

function prevnext() {
  let active = document.querySelector(".active");
  let curentindex = sliderArr.indexOf(active);
  let next, prev;
  if (curentindex == 0) {
    prev = sliderArr[sliderArr.length - 1];
  } else {
    prev = sliderArr[curentindex - 1];
  }
  if (curentindex == sliderArr.length - 1) {
    next = sliderArr[0];
  } else {
    next = sliderArr[curentindex + 1];
  }
  console.log(prev);
  console.log(curentindex);
  console.log(next);
  return [next, prev];
}
prevnext();

function koyjabo() {
  let active = document.querySelector(".active");
  let curentindex = sliderArr.indexOf(active);
  let [next, prev] = prevnext();
  sliderArr.map((slider, index) => {
    if (curentindex == index) {
      slider.style.transform = "translateX(0)";
    } else if (slider == prev) {
      slider.style.transform = "translateX(-100%)";
    } else if (slider == next) {
      slider.style.transform = "translateX(100%)";
    }
    slider.addEventListener("transitionend", function () {
      active.classList.remove("smoth");
    });
  });
}

next.addEventListener("click", function () {
  let active = document.querySelector(".active");
  let [next, prev] = prevnext();
  active.classList.add("smoth");
  next.classList.add("smoth");
  active.classList.remove("active");
  active.style.transform = "translateX(-100%)";
  next.classList.add("active");
  next.style.transform = "translateX(0)";

  koyjabo();
});

prev.addEventListener("click", function () {
  let active = document.querySelector(".active");
  let [next, prev] = prevnext();
  active.classList.add("smoth");
  prev.classList.add("smoth");
  active.classList.remove("active");
  active.style.transform = "translateX(100%)";
  prev.classList.add("active");
  prev.style.transform = "translateX(0%)";
});
