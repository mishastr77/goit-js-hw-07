const inputValidationRef = document.querySelector("#validation-input");
inputValidationRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === 6) {
    inputValidationRef.classList.remove("invalid");
    inputValidationRef.classList.add("valid");
    return inputValidationRef;
  }
  inputValidationRef.classList.remove("valid");
  inputValidationRef.classList.add("invalid");
  return inputValidationRef;
  };
