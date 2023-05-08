let formElement = document.getElementById("form");

formElement.onsubmit = function (event) {
  if (isFormValid()) {
    return true;
  } else {
    event.preventDefault();
  }
};

let alertRaised = false;

function isFormValid() {
  if ((alertRaised == true)) {
    return false;
  }
  let validations = {
    fullName: {
      pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      message:
        "Please enter a valid full name, valid name: without more then one space",
    },
    pass: {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message:
        "Please enter a valid password, valid password: at least 8 characters, 1 uppercase, 1 lowercase, 1 number",
    },
    mail: {
      pattern: /[^ ]+ ?[^ ]+/,
      message: "Please enter a valid email address",
    },
    website: {
      pattern: /https?:\/\/.*/,
      message:
        "Please enter a valid website address, valid website: http://example.com",
    },
    phone: {
      pattern: /[0-9]{9,10}/,
      message: "Please enter a valid phone number, valid phone: 9-10 digits",
    },
    address: {
      pattern: /.*/,
      message: "Please enter a valid address, valid address: any text",
    },
    coffee: {
      pattern: /[0-9]+/,
      message:
        "Please enter a valid number coffee cups, valid number: any number",
    },
  };

  let alertElement = document.getElementById("alert");
  let errorMessageElement = document.getElementById("errorMessage");
  let ulElement = document.createElement("ul");
  ulElement.className = "list-disc space-y-1 pl-5";

  errorMessageElement.appendChild(ulElement);
  let shouldAlert = false;

  for (let [id, validation] of Object.entries(validations)) {
    let inputElement = document.getElementById(id);
    if (inputElement) {
      let inputValue = inputElement.value;
      let isValid = validation.pattern.test(inputValue);
      if (!isValid) {
        let liElement = document.createElement("li");
        liElement.innerHTML = validation.message;
        ulElement.appendChild(liElement);
        shouldAlert = true;
      }
    }
   
  }

  if (shouldAlert) {
    alertElement.removeAttribute("hidden");
    alertRaised = true;

    setTimeout(() => {
      alertElement.setAttribute("hidden", true);
      errorMessageElement.innerHTML = "";
      alertRaised = false;
    }, 5000);
    return false;
  }
  else {
    return true;
  }

}

function handleAlertClose() {
  let alertElement = document.getElementById("alert");
  alertElement.setAttribute("hidden", true);
}
