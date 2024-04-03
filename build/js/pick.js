document.getElementById("toggle").addEventListener("change", function () {
  const label = document.getElementById("toggleLabel");
  label.textContent = this.checked ? "Yearly" : "Month";
});
