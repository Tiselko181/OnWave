const searchIcon = document.querySelector(".auth__search-icon");
const searchInput = document.getElementById("search-input");

searchIcon.addEventListener("click", function () {
    searchInput.classList.toggle("expanded-width");
    if (searchInput.classList.contains("expanded-width")) {
        searchInput.focus();
    } else {
        searchInput.blur();
    }
});


