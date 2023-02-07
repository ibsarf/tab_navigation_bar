const contents = document.querySelectorAll(".content");
const liShows = document.querySelectorAll(".navigation ul li");

liShows.forEach((liShow, i) => {
  liShow.addEventListener("click", () => {
    show();
    contents[i].classList.add("active");
    liShows.forEach((liOutherShow) => {
      liOutherShow.classList.remove("active");
    });

    liShow.classList.add("active");
  });
});

function show() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
