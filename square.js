
const inputNumber = document.getElementById('inputNumber');
const calcBtn = document.getElementById('calcBtn');
const resultPara = document.getElementById('result');


calcBtn.addEventListener('click', function() {
 
  const num = parseFloat(inputNumber.value);
  
  const square = num * num;
  
  resultPara.textContent = `Square of ${num} is ${square}`;
});
