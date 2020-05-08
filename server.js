const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('pages/signup.html', { root: __dirname });
});


app.use(express.static('pages'));

app.listen(port, () => {
  console.log(`Server running at local host port ${port}`);
});