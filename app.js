const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Docker and ECR123');
});

app.get('/app', (req, res) => {
    res.send('ci/cd deployment completed successfully');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
