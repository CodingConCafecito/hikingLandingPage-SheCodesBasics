function subscriptionPreference() {
  let preferredName = prompt("What is your preferred name?");
  let subscriptionOption = prompt(
    "Would you like to receive trail recommendations via email or text?"
  );
  let btnConfirmation = document.querySelector("button");
  subscriptionOption = subscriptionOption.toLowerCase();
  subscriptionOption = subscriptionOption.trim();

  if (subscriptionOption === "email") {
    let emailInfo = prompt("What is your email address?");
    btnConfirmation.innerText = "Processing...";
    setTimeout(() => {
      btnConfirmation.style.display = "none";
      confirmationMessage.style.color = "#2c786c";
      confirmationMessage.innerText =
        "Thank you " +
        preferredName +
        "! Please check your email for trail recommendations. 📩 ☺️";
    }, 1000);
  } else {
    if (subscriptionOption === "text") {
      let textInfo = prompt("What is your phone number?");
      btnConfirmation.innerText = "Processing...";
      setTimeout(() => {
        btnConfirmation.style.display = "none";
        confirmationMessage.style.color = "#2c786c";
        confirmationMessage.innerText =
          "Thank you " +
          preferredName +
          "! Please check your text messages for trail recommendations. 📲 ☺️";
      }, 2000);
    }
  }
}

let trailButton = document.querySelector("button");
addEventListener("click", subscriptionPreference);
