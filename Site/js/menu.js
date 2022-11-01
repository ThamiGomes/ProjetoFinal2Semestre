let tabs = document.querySelectorAll(".tab");
let overlay = document.querySelector(".overlay");

let firstActive = document.querySelector(".tab-is-active");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    let tl = new TimelineLite();

    tabs.forEach((tab) => {
      tab.classList.remove("tab-is-active");
      this.classList.add("tab-is-active");
    });
  });
});