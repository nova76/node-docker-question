const express = require('express');
const app = express();
const port = 4200;

app.get('/', (req, res) => {
    console.log('API endpoint hívása');
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Az API szolgáltatás fut a http://localhost:${port} címen.`);
});