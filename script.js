const box = document.querySelector("#box");
const btn = document.querySelector("#Tglbtn");

btn.addEventListener("click", function () {
  if (box.classList.contains("light-mode")) {
    box.classList.remove("light-mode");
    box.classList.add("dark-mode");
  } else {
    box.classList.remove("dark-mode");
    box.classList.add("light-mode");
  }
});

console.log("hi");
