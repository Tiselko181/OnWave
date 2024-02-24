/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
var searchIcon = document.querySelector(".auth__search-icon");
var searchInput = document.getElementById("search-input");
searchIcon.addEventListener("click", function () {
  searchInput.classList.toggle("expanded-width");
  if (searchInput.classList.contains("expanded-width")) {
    searchInput.focus();
  } else {
    searchInput.blur();
  }
});
/******/ })()
;
//# sourceMappingURL=script.js.map