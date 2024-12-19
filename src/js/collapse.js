export default class Collapse {
  createCollapse() {
    const btn = document.querySelector(".btn");
    const borderText = document.querySelector(".border-text");

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (borderText.classList.contains("show")) {
        borderText.classList.remove("show");
        return;
      }
      borderText.classList.add("show");
    });
  }
}
