const qs = document.querySelectorAll(".q");

qs.forEach((q) =>
  q.addEventListener("click", function () {
    q.classList.toggle("clicked");
    q.classList.toggle("hide");
    q.classList.toggle("rotate");
  })
);
