const searchButton = document.querySelector(".search-button");
const searchWrapper = document.querySelector(".search-wrapper");
const searcForm = document.querySelector(".search-form");

if (searchWrapper) {
  searchWrapper.classList.remove("is-active");
  searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchWrapper.classList.toggle("is-active");
  });
}

const checkInputValue = function (arr) {
  let flag = true;
  arr.forEach(element => {
    if (!element.value) {
      flag = false;
    }
  });
  return flag;
}

searcForm.addEventListener("submit", function (evt) {
  const inputs = searcForm.querySelectorAll("input");
  if (!checkInputValue(inputs)) {
    evt.preventDefault();
    searchWrapper.classList.add("error");
    setTimeout(() => {
      searchWrapper.classList.remove("error");
    }, 600)
  } else {
    searchWrapper.classList.remove("error");
  }
});
