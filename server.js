require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8888;

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});