const output = document.querySelector('.output'),
  output1 = document.querySelector('.output-1'),
  output2 = document.querySelector('.output-2'),
  output3 = document.querySelector('.output-3');

document.querySelector('body').addEventListener('keydown', e => {
  output1.textContent = e.keyCode;
  output2.textContent = e.key;
  output3.textContent = e.code;
});
