/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/collapse.js
class Collapse {
  createCollapse() {
    const btn = document.querySelector(".btn");
    const borderText = document.querySelector(".border-text");
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (borderText.classList.contains("show")) {
        borderText.classList.remove("show");
        return;
      }
      borderText.classList.add("show");
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const collapse = new Collapse();
collapse.createCollapse();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;