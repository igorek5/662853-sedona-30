const searchButton = document.querySelector(".search-button");
const searchForm = document.querySelector(".search-form");

const dateArrival = searchForm.querySelector("[name=arrival-date]");
const dateOfDeparture = searchForm.querySelector("[name=date-of-departure]")
const adults = searchForm.querySelector(".search-people-adults");
const children = searchForm.querySelector(".search-people-children");

let isStorageSupport = true;
let adultsStorage = "";
let childrenStorage = "";

try {
  adultsStorage = localStorage.getItem("adults");
  childrenStorage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

if (isStorageSupport) {
  adults.value = adultsStorage;
  children.value = childrenStorage;
}

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

searchForm.addEventListener("submit", function (evt) {
  if (!dateArrival.value || !dateOfDeparture.value) {
    evt.preventDefault();
    console.log("error: не заполнено поле")
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});
