function calculate() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operation = document.querySelector('input[name="operation"]:checked').value;

  fetch("http://192.168.1.168:3000/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ num1, num2, operation })
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById("result").innerText = "Result: " + result;
  })
  .catch(err => {
    document.getElementById("result").innerText = "Error: " + err;
  });
}

