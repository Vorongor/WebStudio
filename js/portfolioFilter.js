(() => {
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-button");
    const items = document.querySelectorAll(".row-list-item");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.textContent;
        filterItems(category);
      });
    });

    function filterItems(category) {
      items.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (category === "All" || category === itemCategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      const emptyItem = document.querySelector(
        ".row-list-item[data-category='Empty']"
      );
      const hasItemsInCategory = Array.from(items).some(
        (item) =>
          item.style.display !== "none" &&
          item.getAttribute("data-category") !== "Empty"
      );

      if (category === "All" || hasItemsInCategory) {
        emptyItem.style.display = "none";
      } else {
        emptyItem.style.display = "block";
      }
    }
  });
})();
