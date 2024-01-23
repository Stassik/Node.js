// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http');
let countHome = 0;
let countAbout = 0;
let countContact = 0;
const server = http.createServer((req, res) => {
    console.log("Запрос получен");

    if (req.url === '/') {
        countHome = countHome + 1;
        res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Вы на Главной странице!</h1><p>Данную страницу посетили ${countHome} раз(а)</p><div><a href="/about">На страницу Обо мне</a><span> - Посетили ${countAbout} раз</span></div><div><a href="/contact">На страницу Контакты</a><span> - Посетили ${countContact} раз</span></div>`);
    } else if (req.url === '/about') {
        countAbout = countAbout + 1;
        res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Вы на странице Обо мне!</h1><p>Данную страницу посетили ${countAbout} раз(а)</p><div><a href="/">Вернуться на Главную страницу</a><span> - Посетили ${countHome} раз</span></div><div><a href="/contact">На страницу Контакты</a><span> - Посетили ${countContact} раз</span></div>`);
    } else if (req.url === '/contact') {
        countContact = countContact + 1;
        res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Вы на странице Контакты!</h1><p>Данную страницу посетили ${countContact} раз(а)</p><div><a href="/">Вернуться на Главную страницу</a><span> - Посетили ${countHome} раз</span></div><div><a href="/about">На страницу Обо мне</a><span> - Посетили ${countAbout} раз</span></div>`);
    }

    else {
        res.writeHead(404, { 'content-type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Страница не найдена</h1><div><a href="/">Вернуться на Главную страницу</a></div>`);
    }

});

const port = 3000;
server.listen(port, () => {
    console.log("Сервер запущен на порту" + port);
});