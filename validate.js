const formElement = document.getElementById("form");
formElement.onsubmit = function (event) {
  if (isFormValid()) {
    return true;
  } else {
    event.preventDefault();
  }
};

function isFormValid() {
  const validations = {
    fullName: {
      pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      message: "Please enter a valid full name",
    },
    pass: {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message: "Please enter a valid password",
    },
    mail: {
      pattern: /[^ ]+ ?[^ ]+/,
      message: "Please enter a valid email address",
    },
    website: {
      pattern: /https?:\/\/.*/,
      message: "Please enter a valid website address",
    },
    phone: {
      pattern: /[0-9]{9,10}/,
      message: "Please enter a valid phone number",
    },
    address: {
      pattern: /.*/,
      message: "Please enter a valid address",
    },
    coffee: {
      pattern: /[0-9]+/,
      message: "Please enter a valid number coffee cups",
    },
  };

  const alertElement = document.getElementById("alert");
  const errorMessageElement = document.getElementById("errorMessage");
  const ulElement = document.createElement("ul");
  ulElement.className = "list-disc space-y-1 pl-5";

  errorMessageElement.appendChild(ulElement);
  let shouldAlert = false;

  for (let [id, validation] of Object.entries(validations)) {
    const inputElement = document.getElementById(id);
    const inputValue = inputElement.value;
    const isValid = validation.pattern.test(inputValue);

    if (!isValid) {
      let liElement = document.createElement("li");
      liElement.innerHTML = validation.message;
      ulElement.appendChild(liElement);
      shouldAlert = true;
    }
  }

  if (shouldAlert) {
    alertElement.removeAttribute("hidden");
    return false;
  } else {
    alertElement.setAttribute("hidden", true);
    return true;
  }
}
