const express = require('express');
const app = express();
const { execFile } = require('child_process');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'docs')));

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  if (!["avg", "min", "max"].includes(operation)) {
    return res.status(400).send("Invalid operation");
  }

  const execPath = path.join(__dirname, operation);

  execFile(execPath, [num1, num2], (error, stdout, stderr) => {
    if (error) return res.status(500).send("Error: " + stderr);
    res.send(stdout);
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
