const arcade = document.getElementById('arcade')
const advance = document.getElementById('advance')
const pro = document.getElementById('pro')


document.getElementById("toggle").addEventListener("change", function () {
  const label = document.getElementById("toggleLabel");
  label.textContent = this.checked ? "Yearly" : "Month";
});
