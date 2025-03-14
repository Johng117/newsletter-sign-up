// define variables 
let sectionEls = document.getElementsByTagName("section");
let errorStateColor = "hsl(4, 100%, 67%)";
let input = document.getElementById("email");
let btn = document.getElementsByTagName("button")[0];
let errorText = document.getElementsByClassName("email-error-message")[0];
let dismissBtn = document.getElementsByClassName("dismiss")[0];
let emailTextValue = "";
let emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function handleInput(e) {
  e.preventDefault();
  emailTextValue = e.target.value;

  // removes error state and styles on change of input
  errorText.style.display = "none";
  input.style.color = "hsl(234, 29%, 20%)";
  input.style.border = `1px solid hsl(0, 0%, 58%)`;
  input.style.background = "hsl(0, 0%, 100%)";
}

function handleEmailSubmit(e) {
  e.preventDefault();
  setTimeout(() => {
    if (textValue.length < 1 || emailRegex.test(textValue) === false) {
      errorText.style.display = "block";
      errorText.style.color = errorStateColor;
      input.style.color = errorStateColor;
      input.style.border = `3px solid ${errorStateColor}`;
      input.style.background = "hsl(4, 100%, 95%)";
    } else {
      let successEl = document.getElementsByClassName("success")[0];
      for (element of sectionEls) {
        element.style.display = "none";
      }
      successEl.style.display = "block";
    }
    input.value = "";
    textValue = "";
  }, 500);
}

function handleDismiss(e) {
  e.preventDefault();
  let dismissEl = document.getElementsByClassName("success")[0];
  dismissEl.style.display = "none";
  for (let i = 0; i <= 3; i++) {
    sectionEls[i].style.display = "block";
  }
}

input.addEventListener("input", handleInput);
btn.addEventListener("click", handleEmailSubmit);
dismissBtn.addEventListener("click", handleDismiss);
