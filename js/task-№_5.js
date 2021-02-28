const inputNameRef = document.querySelector('#name-input');
inputNameRef.addEventListener('input', onInputName);

function onInputName(event) {
const spanNameOutput = document.querySelector('#name-output');
event.currentTarget.value === '' ? spanNameOutput.textContent = 'незнакомец' :
spanNameOutput.textContent = event.currentTarget.value;
return spanNameOutput;
};

