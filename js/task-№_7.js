const inputFontSizeRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

inputFontSizeRef.addEventListener('input', onInputFontSize);

function onInputFontSize(event) {
spanTextRef.style.fontSize = `${event.currentTarget.value}px`;
return spanTextRef;
};