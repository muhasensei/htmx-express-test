const express = require('express');
const dotenv = require('dotenv');
const TemplatingEngine = require('express-handlebars');
dotenv.config();


const Handlebars = TemplatingEngine.create({
    extname: 'html',
    partialsDir: [
        'test'
    ]
});
const app = express();
const port = process.env.PORT;

app.engine('html', Handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index.html', {name: 'htmx-test'});
});

app.get('/hello', (req, res) => {
    res.render('hello', {name: 'hello page'});
});

app.get('/clicked', (req, res) => {
    res.send(`<h1>name changed!<h2/>`);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});