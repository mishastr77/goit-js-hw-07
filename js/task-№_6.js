const inputValidationRef = document.querySelector("#validation-input");
inputValidationRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === 6) {
    inputValidationRef.classList.add("valid");
    inputValidationRef.classList.remove("invalid");
    }
  if (event.currentTarget.value.length !== 6){
    inputValidationRef.classList.add("invalid");
    inputValidationRef.classList.remove("valid");
   }
if (event.currentTarget.value.length === 0){
  inputValidationRef.classList.remove("valid");
  inputValidationRef.classList.remove("invalid");
 } 
  };
