const qs = document.querySelectorAll(".q");
const cube = document.querySelector(".cube-desktop-logo");

qs.forEach((q) =>
  q.addEventListener("click", function () {
    q.classList.toggle("clicked");
    q.classList.toggle("hide");
    q.classList.toggle("rotate");
  })
);
