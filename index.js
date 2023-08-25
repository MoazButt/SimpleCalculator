let display = document.getElementById('display');

function appendToDisplay(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = 'Error';
  }
}

function clearDisplay() {
  display.textContent = '0';
}

// Key press event listener
document.addEventListener('keydown', function(event) {
    const key = event.key;

    switch (key) {
      case '0': case '1': case '2': case '3': case '4':
      case '5': case '6': case '7': case '8': case '9':
      case '.':
      case '+': case '-': case '*': case '/':
        event.preventDefault();
        appendToDisplay(key);
        break;
      case '=': case 'Enter':
        event.preventDefault();
        calculate();
        break;
      case 'Escape':
      case 'Backspace':
        event.preventDefault();
        clearDisplay();
        break;
      default:
        // Ignore other keys
        break;
    }
  });