const searchButton = document.querySelector(".search-button");
const searchForm = document.querySelector(".search-form");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!searchForm.classList.contains("off-form") && !searchForm.classList.contains('on-form')) {
    searchForm.classList.add("off-form");
  } else {
    if (searchForm.classList.contains("off-form")) {
      searchForm.classList.remove("off-form");
      searchForm.classList.add("on-form");
    } else {
      if (searchForm.classList.contains("on-form")) {
        searchForm.classList.remove("on-form");
        searchForm.classList.add("off-form");
      };
    };
  };
});
