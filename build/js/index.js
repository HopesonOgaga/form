const formButton = document.getElementById("form");

formButton.addEventListener("submit", function (e) {
  e.preventDefault();

  // Move these lines inside the submit event listener
  const phone_number = document.getElementById("phone-number").value;
  const user_name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  let user_info = {
    phone_number: phone_number,
    name: user_name,
    email: email,
  };

  console.log(user_info);

  // local storage

  localStorage.setItem("user_info", JSON.stringify(user_info));

  //next page
  location.href = "./pick.html";
});

