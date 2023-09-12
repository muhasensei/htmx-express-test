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

app.use(express.static('public'))
app.engine('html', Handlebars.engine);
app.set('view engine', 'handlebars');

let name = 'name';

app.get('/', (req, res) => {
    res.render('index.html', {name});
});

app.get('/test-page-1', (req, res) => {
    res.render('test-page-1.html', {name});
});

app.get('/test-page-2', (req, res) => {
    res.render('test-page-2.html', {name});
});

app.get('/load-data', (req, res) => {
    res.send(
        new Array(100).fill(0).map(() => `
            <li>
               new data
            </li>
        `).join('')
    );
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});