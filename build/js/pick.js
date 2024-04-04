const arcade = document.getElementById("arcade");
const advance = document.getElementById("advance");
const pro = document.getElementById("pro");
const next_btn = document.getElementById('next-btn')
//p tags
const adv_ptags = advance.querySelector("p:nth-child(2)").textContent;
const arc_ptags = arcade.querySelector("p:nth-child(2)").textContent;
const pro_ptags = pro.querySelector("p:nth-child(2)").textContent;
//

//check events
advance.addEventListener("click", function () {
  localStorage.setItem("adv_ptags", JSON.stringify(adv_ptags));
});
arcade.addEventListener("click", function () {
  localStorage.setItem("arc_ptags", JSON.stringify(arc_ptags));
});
pro.addEventListener("click", function () {
  localStorage.setItem("pro_ptags", JSON.stringify(pro_ptags));
});
//

// toggle section

document.getElementById("toggle").addEventListener("change", function () {
  const label = document.getElementById("toggleLabel");
  label.textContent = this.checked ? "Yearly" : "Month";
});
next_btn.addEventListener('click', function(){
    location.href = "./select.html";
})
