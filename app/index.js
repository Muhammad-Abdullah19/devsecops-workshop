const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('DevSecOps Workshop Working!'));
app.listen(3000, () => console.log('Running on port 3000'));
const express = require('express');
const app = express();
// The port MUST match what you put in your Dockerfile and Service
const port = 3000; 

app.get('/', (req, res) => {
    res.send('DevSecOps Workshop Working!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App running on http://0.0.0.0:${port}`);
});
