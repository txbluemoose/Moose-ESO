// Tag wide tables (5+ columns) so CSS can restack them into cards on phones.
// Copies each column header into the cell's data-label for the stacked view.
(function () {
  function enhance() {
    var tables = document.querySelectorAll(".md-typeset table");
    Array.prototype.forEach.call(tables, function (table) {
      if (table.classList.contains("responsive-cards")) return;
      var ths = table.querySelectorAll("thead > tr > th");
      if (ths.length < 5) return; // only the wide ones (gear tables, tier list)
      var labels = Array.prototype.map.call(ths, function (th) {
        return th.textContent.trim();
      });
      table.classList.add("responsive-cards");
      var rows = table.querySelectorAll("tbody > tr");
      Array.prototype.forEach.call(rows, function (tr) {
        Array.prototype.forEach.call(tr.children, function (td, i) {
          if (labels[i]) td.setAttribute("data-label", labels[i]);
        });
      });
    });
  }
  if (document.readyState !== "loading") enhance();
  else document.addEventListener("DOMContentLoaded", enhance);
})();
