function calculate() {
      var num1 = parseInt(document.getElementById('num1').value)
      var num2 = parseInt(document.getElementById('num2').value)
      var operator = document.getElementById('operator').value

      document.getElementById('answer').innerHTML=calculateAnswer(operator, num1, num2)
}
    
function calculateAnswer(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;  
    default:
      return "invalid operation"    
  }
}
