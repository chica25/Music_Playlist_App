
const text = document.querySelector('.text-effec')
const strText = text.textContent;
const splitText = strText.split('')

for(let i=0; i < splitText.length; i++)
text.innerHTML += '<span>' + splitText[i] + '</span>';

