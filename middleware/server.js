const express = require('express');
const app = express();
const PORT = 9000;
const loggerr=require('./loggerr')

app.use(loggerr)


app.get('/', (req, res) => {
    res.send('Welcome to the Main Page');
});
app.get('/about', (req, res) => {
    res.send('About Page!');
});
app.get('/products', (req, res) => {
    res.send('Product Page!');
});
app.get('/items', (req, res) => {
    res.send('Item Page!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
