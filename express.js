const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const file = JSON.parse(fs.readFileSync('static/views.json'));


app.get('/', updateCount, getCount, (req, res) => {
    res.send(`
    <h1>Главная страница</h1>
    <a href="/about">Ссылка на страницу обо мне</a>
    <p>Эту страницу посетили ${req.counter} раз.</p>`);
});
app.get('/about', updateCount, getCount, (req, res) => {
    res.send(`
    <h1>Страница обо мне</h1>
    <a href="/">Ссылка на гланвую страницу</a>
    <p>Эту страницу посетили ${req.counter} раз.</p>`);
});


app.listen(3000);


function updateCount(req, res, next) {
    const url = req.url;
    file[url] = file[url] + 1;
    const pathToFile = path.join(__dirname, 'static/views.json');
    const viewsJson = JSON.stringify(file, null, 2);
    fs.writeFileSync(pathToFile, viewsJson);
    next();
}

function getCount(req, res, next) {
    const url = req.url;
    req.counter = file[url];
    next();
}
