const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const listItem = movieLists[i].querySelectorAll("img").length;
  let clickCount = 0;
  arrow.addEventListener("click", () => {
    const witdthItemsScreen = Math.floor(window.innerWidth / 270);
    clickCount++;
    if (listItem - (4 + clickCount) + (4 - witdthItemsScreen) > 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px) `;
    } else {
      movieLists[i].style.transform = `translateX(0)`;
      clickCount = 0;
    }
  });
});

const toggleTheme = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.left-menu-icon,.movie-list-title,.navbar-container,.toggle"
);

toggleTheme.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  toggleTheme.classList.toggle("active");
});
