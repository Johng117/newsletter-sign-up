document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

// define variables
const sectionEls = document.getElementsByTagName("section");
const form = document.getElementById("form");
const errorStateColor = "hsl(4, 100%, 67%)";
const input = document.getElementById("email");
const btn = document.getElementsByTagName("button")[0];
const errorText = document.getElementsByClassName("email-error-message")[0];
const dismissBtn = document.getElementsByClassName("dismiss")[0];
let mainEl = document.querySelector("main");
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function handleInput(e) {
  e.preventDefault();
  // removes error state and styles on change of input
  errorText.style.display = "none";
  input.style.color = "hsl(234, 29%, 20%)";
  input.style.border = `1px solid hsl(0, 0%, 58%)`;
  input.style.background = "hsl(0, 0%, 100%)";
}

function handleEmailSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  if (data.email.length < 1 || emailRegex.test(data.email) === false) {
    errorText.style.display = "block";
    errorText.style.color = errorStateColor;
    input.style.color = errorStateColor;
    input.style.border = `3px solid ${errorStateColor}`;
    input.style.background = "hsl(4, 100%, 95%)";
  } else {
    let successEl = document.getElementsByClassName("success")[0];
    mainEl.style.backgroundColor = "hsl(234, 29%, 20%)";
    for (element of sectionEls) {
      element.style.display = "none";
    }
    successEl.style.display = "block";
    input.value = "";
  }
}

function handleDismiss(e) {
  e.preventDefault();
  let dismissEl = document.getElementsByClassName("success")[0];
  dismissEl.style.display = "none";
  mainEl.style.backgroundColor = "hsl(0, 0%, 100%)";
  for (let i = 0; i <= 3; i++) {
    sectionEls[i].style.display = "block";
  }
}

input.addEventListener("input", handleInput);
form.addEventListener("submit", handleEmailSubmit);
dismissBtn.addEventListener("click", handleDismiss);
