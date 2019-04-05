const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Open this URL in your browser http://localhost:3000');
});